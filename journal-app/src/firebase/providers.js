import { async } from "@firebase/util";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        // console.log(credentials) //Here we can take the google 'access token' if necessary

        const { displayName, email, photoURL, uid} = result.user; //Firebase access token
        
        return {
            ok: true,
            //User info
            displayName, email, photoURL, uid
        }

    }catch(error){
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode, errorMessage
        }
    }
}