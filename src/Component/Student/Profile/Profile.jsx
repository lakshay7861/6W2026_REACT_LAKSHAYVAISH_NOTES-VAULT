import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../../../Firebase/FirebaseConfig"
import AuthService from "../../../Services/AuthService"

const roleNames = { 1: "Admin", 2: "Alumni", 3: "Student" }

function Profile() {
    const nav = useNavigate()
    const session = AuthService.getData()
    const uid = session?.id

    const [profile, setProfile] = useState(null)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    useEffect(() => {
        async function load() {
            try {
                const snap = await getDoc(doc(db, "users", uid))
                if (snap.exists()) {
                    const data = snap.data()
                    setProfile(data)
                    setName(data.name || "")
                    setPhone(data.phone || "")
                }
            } catch (err) {
                toast.error("Failed to load profile")
                console.log("Profile error:", err)
            } finally {
                setLoading(false)
            }
        }
        if (uid) load()
        else setLoading(false)
    }, [uid])

    async function saveProfile(e) {
        e.preventDefault()
        if (!name.trim()) return toast.error("Name cannot be empty")

        try {
            setSaving(true)
            await updateDoc(doc(db, "users", uid), {
                name: name.trim(),
                phone: phone.trim(),
                updatedAt: new Date().toISOString(),
            })
            // Keep the saved session name in sync, so the header shows the new name
            AuthService.setData({ ...session, name: name.trim() })
            toast.success("Profile updated")
        } catch (err) {
            toast.error("Failed to update profile")
            console.log("Profile save error:", err)
        } finally {
            setSaving(false)
        }
    }

    function logout() {
        AuthService.logout()
        nav("/login", { replace: true })
    }

    if (loading) {
        return <div className="container my-5"><p>Loading...</p></div>
    }

    if (!profile) {
        return (
            <div className="container my-5">
                <p>Profile not found.</p>
                <Link to="/">Go to home</Link>
            </div>
        )
    }

    return (
        <div className="container my-5" style={{ maxWidth: "640px" }}>
            <h2 className="text-success mb-4">My Profile</h2>

            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <p className="mb-2"><strong>Email:</strong> {profile.email}</p>
                    <p className="mb-0"><strong>Role:</strong> {roleNames[Number(profile.userType)] || "Member"}</p>
                </div>
            </div>

            <form onSubmit={saveProfile} className="card shadow-sm">
                <div className="card-body">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input
                            type="tel"
                            className="form-control"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div className="d-flex gap-2">
                        <button type="submit" className="btn btn-success" disabled={saving}>
                            {saving ? "Saving..." : "Save changes"}
                        </button>
                        <button type="button" className="btn btn-outline-secondary" onClick={logout}>
                            Logout
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Profile