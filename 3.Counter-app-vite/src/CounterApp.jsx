import { useState } from "react"
import PropTypes from "prop-types"

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