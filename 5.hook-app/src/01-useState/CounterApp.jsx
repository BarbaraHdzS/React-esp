import React, { useState } from 'react';

export const CounterApp = () => {

    //puedes en lugar de inicializar el estado con un valor numerico, inicializarlo con un objeto o un arreglo
    const [counter, setCounter] = useState({
        counter: 10,
        counter2: 20,
        counter3: 30    
        }    )

    return (
        <>
            <h1>Counter:{counter}</h1>

            <hr />

            <button className="btn" onClick={() => setCounter(counter+1)}>+1</button>

       </>
    )
}