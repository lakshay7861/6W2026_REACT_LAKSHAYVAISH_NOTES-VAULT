import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore"
import ResourceModel from "../Models/ResourceModel"
import { db } from "../Firebase/FirebaseConfig"

const dbpath = "resources"

class ResourceService {
    async add(data) {
        const now = new Date().toISOString()
        const newResource = {
            ...new ResourceModel(),
            title: data.title || "",
            semester: data.semester || "",
            subject: data.subject || "",
            topic: data.topic || "",
            description: data.description || "",
            videoUrl: data.videoUrl || "",
            uploadedBy: data.uploadedBy || "",
            createdAt: now,
            updatedAt: now,
        }
        return await addDoc(collection(db, dbpath), newResource)
    }

    async all() {
        const snapshot = await getDocs(collection(db, dbpath))
        const resources = []
        snapshot.forEach((d) => {
            resources.push({ id: d.id, ...d.data() })
        })
        // Semester, phir subject ke hisaab se sort
        return resources.sort((a, b) =>
            String(a.semester).localeCompare(String(b.semester), undefined, { numeric: true }) ||
            String(a.subject).localeCompare(String(b.subject))
        )
    }

    async update(id, data) {
        await updateDoc(doc(db, dbpath, id), { ...data, updatedAt: new Date().toISOString() })
    }

    async delete(id) {
        await deleteDoc(doc(db, dbpath, id))
    }
}

export default new ResourceService()