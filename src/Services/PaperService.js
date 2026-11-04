import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore"
import PaperModel from "../Models/PaperModel"
import { db } from "../Firebase/FirebaseConfig"

const dbpath = "questionPapers"

class PaperService {
    async add(data) {
        const now = new Date().toISOString()
        const newPaper = {
            ...new PaperModel(),
            title: data.title || "",
            subject: data.subject || "",
            year: data.year || "",
            fileUrl: data.fileUrl || "",
            uploadedBy: data.uploadedBy || "",
            createdAt: now,
            updatedAt: now,
        }
        return await addDoc(collection(db, dbpath), newPaper)
    }

    async all() {
        const querySnapshot = await getDocs(collection(db, dbpath))
        const papers = []
        querySnapshot.forEach((d) => {
            papers.push({ id: d.id, ...d.data() })
        })
        return papers
    }

    async update(id, data) {
        await updateDoc(doc(db, dbpath, id), { ...data, updatedAt: new Date().toISOString() })
    }

    async delete(id) {
        await deleteDoc(doc(db, dbpath, id))
    }
}

export default new PaperService()