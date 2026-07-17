import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import PaperModel from "../Models/PaperModel";
import { db } from "../Firebase/FirebaseConfig";

class PaperService {
    async add(data) {
        let newPaper = new PaperModel();

        newPaper.title = data.name;
        newPaper.subject = data.subject;
        newPaper.fileUrl = data.fileUrl;
        newPaper.uploadedBy = data.uploadedBy;
        newPaper.createdAt = data.createdAt; 

        const docRef = await addDoc(collection(db, "Paper"), { ...newPaper })

        return docRef;

    }
    async all() {
        const querySnapshot = await getDocs(collection(db, "cities"));
        let Paper = []
        querySnapshot.forEach((doc) => {
            Paper.push({ id: doc.id, ...doc.data() })
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        return Paper;
    }

    async single(id) {
        const docRef = doc(db, "Paper",);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }

    }
    async update(payload, id) {
        const PaperRef =doc(db, "Paper",id);
        return await updateDoc(PaperRef ,payload)
    }
}

export default new PaperService;