import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

//useCallback es un hook que se usa para memorizar funciones y lo que regresa es una funcon que se puede ejecutar, pero solo se va a volver a procesar cuando algo cambie (como un memo pero para funciones)
export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

//     //firma de useCallback
//     useCallback(() => {
//          //callback que queremos ejecutar
//         first 
//     }, 
//     //dependencias
//     [],
// )
    //lo unico que hace es llamar al setCounter del padre y tomar el counter y sumarle el valor que le pasamos
    //funcino memorizada, para el componente es la misma funcion, pero en realidad es una funcion diferente, pero el componente no lo sabe, por eso no se vuelve a renderizar
    const incrementFather = useCallback(
//esta funcion es la que se esta llamando en el hijo (increment( 5 );), por lo que vamos a recibir un argumento lo debemos recibir aqui
      (value) => {
        //manda a llamar al setCounter del padre y le pasa el valor que le pasamos
        //la funcion setCpunter sabe que va a tomar el valor actual del state y le va a sumar el valor que le pasamos
        setCounter( (c) => c + value );
      },
      //nuestra funcion solo se dibuja una vez
      [],
    );

    useEffect(() => {
      // incrementFather();
    }, [incrementFather])
    
    
    // const incrementFather = () => {
    //     setCounter( counter + 1);
    // }


    return (
        <>
            <h1>useCallback Hook: { counter } </h1>
            <hr />

            <ShowIncrement increment={ incrementFather } />
        </>
    )
}