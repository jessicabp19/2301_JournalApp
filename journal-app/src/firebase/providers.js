import { async } from "@firebase/util";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        //Here we can take the Google 'access token' if necessary

        const { displayName, email, photoURL, uid} = result.user; //Firebase access token
        
        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;

        return { ok: false, errorCode, errorMessage }
    }
}


export const registerUserWithEmailPassword = async({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        
        await updateProfile( FirebaseAuth.currentUser, { displayName } )  // resp.user works too

        return {
            ok: true,
            uid, photoURL, email, displayName
        }


    } catch (error) {
        //Validations here
        return { ok: false, errorMessage: error.message }
    }

}

export const loginWithEmailPassword = async({email, password}) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        
        const { displayName, photoURL, uid} = resp.user;

        return {
            ok: true,
            displayName, email, photoURL, uid
        }
        
    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}