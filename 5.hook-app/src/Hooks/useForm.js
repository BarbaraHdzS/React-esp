import { useState } from 'react';

//es un customer hook

export const useForm = ( initialForm = {} ) => {
  
    //los componentes se ponen aqui (la logica) y no en el FormWithCustomHook.jsx 
    //este envia los valores del formulario y las funciones
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }
//se deconstruye el formState 
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}