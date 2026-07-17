import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "../Firebase/FirebaseConfig"
import  UserModel from "../Models/UserModel"


const dbpath ="users"

class UsersService{
    async register(data){
        const usersData = await createUserWithEmailAndPassword(auth, data.email, data.password)
        const user = usersData.user
        const newUser = new UserModel()
        newUser.name = user.uid
        newUser.email =user.email;
        newUser.phone = user.phoneNumber;
        newUser.userType= 2 //Provider

        const setDocData =await setDoc(doc(db,dbpath,usersData.uid), {...newUser});
        await signOut(auth)
         return setDocData
    }
    async registerstudent(data)
    {
        const usersData= await createUserWithEmailAndPassword(auth, data.email , data.password)
        const user = usersData.user
        const newUser = new UserModel()
        newUser.name= user.name;
        newUser.email=user.email;
        newUser.userType = 3 //student

        const setDocData= await setDoc(doc(db, dbpath,user.name),{...newUser});
        await signOut(auth)
        return setDocData
    }
    async login(data)
    {
        const usersData = signInWithEmailAndPassword(auth
            , 
            data.email,
            data.password
        );
        const users= (await usersData).user
        const user
    }
}