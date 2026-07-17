// import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
// import NotesModel from "../Models/NotesModel";
// import { db } from "../Firebase/FirebaseConfig";


// const dbpath = "Notes"
// class NotesService {
//     async add(data) {

//         let newNotes = new NotesModel(data);
//         newNotes.title = data.name;
//         newNotes.subject = data.subject;
//         newNotes.description = data.description;
//         // newNotes.fileUrl = data.fileUrl;

//         const docRef = await addDoc(collection(db, dbpath,), { ...newNotes })
//         return docRef;
//     }


//     async all() {
//         const querySnapshot = await getDocs(collection(db, dbpath));
//         let Notes = []
//         querySnapshot.forEach((doc) => {
//             // doc.data() is never undefined for query doc snapshots
//             Notes.push({ id: doc.id, ...doc.data() })
//             console.log(doc.id, " => ", doc.data());
//         });
//     }
//     async single(id) {
//         const docRef = doc(db, dbpath);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//             console.log("Document data:", docSnap.data());
//         } else {
//             // docSnap.data() will be undefined in this case
//             console.log("No such document!");
//             return false;
//         }
//     }
//     async update(data, id) {
//         const docRef = doc(db, dbpath, id);
//         await updateDoc(docRef, data);
//     }

//      async deletenotes(id) {
//         const docRef = doc(db, dbpath, id);
//         await deleteDoc(docRef)
//     }
// }
// export default new NotesService;


import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import NotesModel from "../Models/NotesModel";
import { db } from "../Firebase/FirebaseConfig";


const dbpath = "Notes"
class NotesService {
    async add(data) {

        let newNotes = new NotesModel(data);
        newNotes.title = data.name;
        newNotes.subject = data.subject;
        newNotes.description = data.description;
        // newNotes.fileUrl = data.fileUrl;

        const docRef = await addDoc(collection(db, dbpath), { ...newNotes })
        return docRef;
    }


    async all() {
        const querySnapshot = await getDocs(collection(db, dbpath));
        let Notes = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            Notes.push({ id: doc.id, ...doc.data() })
            console.log(doc.id, " => ", doc.data());
        });
        return Notes
    }
    async single(id) {
        const docRef = doc(db, dbpath,id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            return false;
        }
    }
    async update(data, id) {
        const docRef = doc(db, dbpath, id);
        await updateDoc(docRef, data);
    }

     async deletenotes(id) {
        const docRef = doc(db, dbpath, id);
        await deleteDoc(docRef)
    }
}
export default new NotesService();