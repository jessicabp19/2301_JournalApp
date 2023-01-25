import { useEffect, useMemo, useState } from 'react'
import { FirstPage } from '@mui/icons-material';
//Herramienta: React Hook Form or formik

export const useForm = ( initialForm = {}, formValidations = {} ) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({
       name: 'Nombre no valido'
    });
    useEffect(() => {
      createValidators();
    }, [formState]) // c/vez que cambie algun dato del form

    const isFormValid = useMemo( () => {
        
        for (const formValue of Object.keys(formValidation)) {
            if ( formValidation[formValue] !== null ) return false //Salimos completamente del for
        }
        return true;
    }, [formValidation])
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }
    
    const createValidators = () => {

        const formCheckedValues = {};

        for (const formField of Object.keys(formValidations)) {
            const [ fn, errorMessage ] = formValidations[formField];

            //displayNameValid, emailValid, passwordValid \o/
            //('jess@google.com') => 'jess@google.com'.includes('@') ? 
            formCheckedValues[`${ formField }Valid`] = fn(formState[formField]) ? null : errorMessage;
        }

        setFormValidation( formCheckedValues );

    }

    return {
        ...formState,
        formState, 
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid
  }
}