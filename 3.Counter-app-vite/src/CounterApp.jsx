import { useState } from "react"
import PropTypes from "prop-types"




export const CounterApp = ({value}) => {

// el primer parametro se usa para poner el valor inicial del contador (estado inicial)
//el segundo parametro es una funcion que se usa para actualizar el estado
    const [counter, setCounter] = useState(0);

    //esta funcion se usa para actualizar el estado del contador
     const handleAdd = () => {
        //le dice que el estado cambio, por lo que vuelve a renderizar el componente
        setCounter(counter + 1);

    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
                <button onClick={handleAdd}>
                +1
             </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}