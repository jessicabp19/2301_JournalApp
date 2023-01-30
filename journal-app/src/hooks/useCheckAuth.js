import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";

import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingNotes } from "../store/journal";


export const useCheckAuth = () => {

  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  useEffect(() => {
    
    onAuthStateChanged( FirebaseAuth, async( user ) => {

      if (!user) return dispatch( logout() );
      
      const { uid, email, displayName, photoURL } = user;
      dispatch( login({ uid, email, displayName, photoURL }) )
      dispatch( startLoadingNotes() );

    });
    //Regresa un observable
    //No es más que una función que está emitiendo valores, 
    //Es decir cuando el estado de la autenticacion cambie, se volverá a disparar
    //Usualmente limpiamos los observable, pero en este caso siempre quiero estar pendiente

  }, [])

  return status
}
