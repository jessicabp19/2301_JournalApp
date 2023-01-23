import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

    }
}

export const startGoogleSingIn = () => {
    return async( dispatch ) => {
        
        dispatch( checkingCredentials() );

        const result = await singInWithGoogle();
        
        if ( !result.ok ) return dispatch( logout(result.errorMessage) )
        //delete result.ok
        dispatch( login(result) )

    }
}