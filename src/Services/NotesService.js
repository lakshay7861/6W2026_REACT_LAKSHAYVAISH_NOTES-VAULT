import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore"
import NotesModel from "../Models/NotesModel"
import { db } from "../Firebase/FirebaseConfig"

const dbpath = "Notes"

class NotesService {
    async add(data) {
        const now = new Date().toISOString()
        const newNotes = {
            ...new NotesModel(),
            title: data.name || "",
            subject: data.subject || "",
            description: data.description || "",
            fileUrl: data.fileUrl || "",
            uploadedBy: data.uploadedBy || "",
            createdAt: now,
            updatedAt: now,
        }
        const docRef = await addDoc(collection(db, dbpath), newNotes)
        return docRef
    }

    async all() {
        const querySnapshot = await getDocs(collection(db, dbpath))
        const notes = []
        querySnapshot.forEach((d) => {
            notes.push({ id: d.id, ...d.data() })
        })
        return notes
    }

    async update(data, id) {
        const docRef = doc(db, dbpath, id)
        await updateDoc(docRef, { ...data, updatedAt: new Date().toISOString() })
    }

    async deletenotes(id) {
        const docRef = doc(db, dbpath, id)
        await deleteDoc(docRef)
    }
}

export default new NotesService()