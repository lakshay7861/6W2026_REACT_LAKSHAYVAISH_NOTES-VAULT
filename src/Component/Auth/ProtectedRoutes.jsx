import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { auth, db } from "../../Firebase/FirebaseConfig"

function ProtectedRoute({ allowedTypes, children }) {
    const [status, setStatus] = useState("checking")

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                setStatus("denied")
                return
            }
            try {
                const snap = await getDoc(doc(db, "users", user.uid))
                if (snap.exists() && allowedTypes.includes(snap.data().userType)) {
                    setStatus("allowed")
                } else {
                    setStatus("denied")
                }
            } catch (err) {
                console.log("Auth check error:", err)
                setStatus("denied")
            }
        })
        return () => unsubscribe()
    }, [])

    if (status === "checking") {
        return <div className="text-center mt-5">Loading...</div>
    }
    if (status === "denied") {
        return <Navigate to="/login" replace />
    }
    return children
}

export default ProtectedRoute