import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

import { doc, getDoc, setDoc } from "firebase/firestore";

import { auth, db } from "../Firebase/FirebaseConfig";
import UserModel from "../Models/UserModel";
import AuthService from "./AuthService";

const dbpath = "users";

class UsersService {
    async register(data) {
        const usersData = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
        );

        const user = usersData.user;

        const newUser = new UserModel();
        newUser.name = data.name; // Register form se aayega
        newUser.email = user.email;
        newUser.phone = data.phone || "";
        newUser.userType = 2;

        await setDoc(doc(db, dbpath, user.uid), { ...newUser });

        await signOut(auth);

        return newUser;
    }

    async registerstudent(data) {
        const usersData = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
        );

        const user = usersData.user;

        const newUser = new UserModel();
        newUser.name = data.name;
        newUser.email = user.email;
        newUser.phone = data.phone || "";
        newUser.userType = 3;

        await setDoc(doc(db, dbpath, user.uid), { ...newUser });

        await signOut(auth);

        return newUser;
    }

    async login(data) {
        const usersData = await signInWithEmailAndPassword(
            auth,
            data.email,
            data.password
        );

        const user = usersData.user;

        const firestoreDoc = await getDoc(doc(db, dbpath, user.uid));

        if (!firestoreDoc.exists()) {
            throw new Error("User data not found");
        }

        const firestoreData = firestoreDoc.data();

        const authData = {
            id: user.uid,
            name: firestoreData.name,
            email: firestoreData.email,
            userType: firestoreData.userType,
            token: user.accessToken,
        };

        await AuthService.setData(authData);

        return authData;
    }
}

export default new UsersService();