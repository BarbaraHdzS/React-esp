import { useState } from "react"
import PropTypes from "prop-types"

//cuando hace la renderizacion de un componente se ejecuta el useState y se inicializa el valor de counter en 0, y cuando se hace un cambio en el estado se vuelve a renderizar el componente, y se vuelve a ejecutar el useState, por eso es importante que el valor inicial sea 0, porque si no lo es, no se va a poder hacer la suma o resta correctamente
// y se va a perder el valor anterior, y se va a volver a inicializar el valor de counter en 0, y no se va a poder hacer la suma o resta correctamente
//o sea cada vez que cambie el estado de un hook se va a volver a disparar el compponente
export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(0);

     const handleAddMas = () => {
    
        setCounter(counter + 1);
    }
    const handleAddMenos = () => {
        setCounter(counter -1);
    }

    const handleAddReset = () => 
        setCounter(value);
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
                <button onClick={handleAddMas}>  +1 </button>
                <button onClick={handleAddMenos}>-1</button>
                <button onClick={handleAddReset}>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}