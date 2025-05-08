import { useEffect, useState } from 'react';
import { Message } from './Message';


export const SimpleForm = () => {

//usamos este estado para cambiar el valor del formulario
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'fernando@google.com'
    });

    //lo deconstruimos para usarlo en el return
    const { username, email } = formState;

    //me permite hacer el cambio del input
    //el target que me esta disparando pasa como el primer argumento
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            //mantienes toda la infromacion del formulario
            //y solo cambias el valor del input que se esta cambiando
            ...formState,
            [ name ]: value
        });
    }

//sirve para disparar efectos secundarios
//la primera funcion del useEffect es el callback, este se ejecuta cada vez que la dependencia se disparada (cada vez que pasa esto, quiero que hagas esto)
    useEffect( () => {
        // console.log('useEffect called!');
    }, []);//si el arreglo es vacio, solo se ejecuta una sola vez
    
    //se recomienda un useEffect por cada dependencia y efecto secundario que quieras
    //si quiero disparar la funcion cuando el formulario cambia, le paso el formState como dependencia
    useEffect( () => {
        // console.log('formState changed!');
    }, [formState]);

//solo se dispara cuando el email cambia
    useEffect( () => {
        // console.log('email changed!');
    }, [ email ]);

    //el useEffect cuanta con 3 partes, la primera es el callback(funcion de retorno), la segunda es el arreglo de dependencias y la tercera es la funcion de limpieza (cleanup function) que se ejecuta cuando el componente se cancela o se desmonta

    return (
        //crea un fromulario simple con dos inputs y un mensaje que aparece cuando el username es strider2
        <>
            <h1>Formulario Simple</h1> 
            <hr />

            <input 
            // el value se actualiza con el estado del formulario
            //el onChange se encarga de cambiar el valor del input
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

{/* si el usuario es strider2, se muestra el mensaje */}
            {
                (username === 'strider2' ) && <Message />
            }

        </>
    )
}