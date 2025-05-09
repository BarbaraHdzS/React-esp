import { useEffect } from 'react';
import { useForm } from '../Hooks/useForm';


//custom hook que se llama useForm para no estar repitiendo el mismo código en todos los formularios
export const FormWithCustomHook = () => {

    //solo se queda la deconstructuracion de los valores que se van a usar en el formulario
    //este recibe y muestra el valor del formulario y lo que se va a usar en el formulario
    //objeto que quiero que tenga el formulario

    //aqui es donde vamos a extarer el onReserForm
    //
    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;
  

    return (
        <>
            <h1>Formulario con custom Hook</h1> 
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />


            <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>

        </>
    )
}