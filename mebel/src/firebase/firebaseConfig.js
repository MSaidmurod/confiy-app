import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBoJDiO5VKo33GFL4FPRbx5xk6E312oVxA",
  authDomain: "confiy.firebaseapp.com",
  projectId: "confiy",
  storageBucket: "confiy.appspot.com",
  messagingSenderId: "753846582684",
  appId: "1:753846582684:web:271955af2fc33e3719dc59"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()

const provider = new GoogleAuthProvider()

export const signUpWithGoogle = async () => {
    return signInWithPopup(auth, provider) 
    .then((result) => {
        return result
    })
    .catch((error) => {
        return error
    })
}

export const logoutFromGoogle = async() => {
  return  signOut(auth)
    .then((result) => {
        return result
    })
    .catch((error) => {
        return error
    })
}