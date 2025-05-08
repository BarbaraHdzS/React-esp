import React, { useState } from 'react';

export const CounterApp = () => {

    //puedes en lugar de inicializar el estado con un valor numerico, inicializarlo con un objeto o un arreglo
    //el counter ahora es un objeto que tiene 3 counters
    //destructuramos el objeto para obtener los valores de cada uno de los counters
    const [{counter1, counter2, counter3}, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30    
        })

    return (
        <>
            <h1>counter 1:  {counter1}</h1>
            <h1>counter 2:  {counter2}</h1>
            <h1>counter 3:  {counter3}</h1>

            <hr />

{/* cuado llamamos el setCounter estamos diciendo que el nuevo valor del counter es el objeto que le pasamos como argumento, y no el valor anterior */}
            <button 
            className="btn" 
            onClick={() => setCounter({
                counter1: counter1 + 1,
                counter2: counter2 + 1,
                counter3: counter3 + 1,
             } )
                }>+1</button>

       </>
    )
}