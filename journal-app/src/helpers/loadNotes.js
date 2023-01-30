import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseApp, FirebaseDB } from "../firebase/config";

export const loadNotes = async(uid = '') => {
    
    if ( !uid ) throw new Error('El UID del usuario no existe');

    FirebaseApp
    const collectionRef = collection(FirebaseDB, `${ uid }/journal/notes`);

    const docs = await getDocs(collectionRef); //Se pueden añadir filtros, order by, etc

    const notes = [];

    docs.forEach( doc => {
        notes.push({ id: doc.id, ...doc.data() });
    })

    return notes;

}