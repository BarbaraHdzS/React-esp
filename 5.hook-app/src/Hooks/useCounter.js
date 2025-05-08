import { useState } from "react"

//un hook solo es una funcion con return
    
export const useCounter = ( initialValue = 10 ) => {

//useState 
    const [ counter, setCounter ] = useState( initialValue )

    //asi cambiamos el valor del counter, no se puede cambiar directamente el valor de counter
    //se usa value para que se pueda cambiar el valor del counter al hacer click en el boton
    //si yo necesito que se incremente el valor del counter en 2, le paso el argumento del value, para que el valor que me manden como valor es el que se va a incrementar
    const increment = ( value = 1 ) => {
        setCounter( counter + value );
    }

    const decrement = ( value = 1 ) => {
        // if ( counter === 0 ) return; se usa esto para que no se pueda decrementar el valor de counter si es 0

        setCounter( counter - value );
    }

    const reset = () => {
        //ponemos el valor inicial para resetear el counter
        setCounter( initialValue );
    }

    //regresas el objeto con las propiedades que quieres usar en el componente
    //estoy regresando un objeto, si regreso arrray debe ser con []
    //si no retornamos nada aqui, en CounterWithCustomHook no se va a poder cambiar el estado (el valor de counter)
    //regresamos todo loq ue queremos usar en el componente de CounterWithCustomHook
    return {
        counter,
        increment,
        decrement,
        reset,
    }

}