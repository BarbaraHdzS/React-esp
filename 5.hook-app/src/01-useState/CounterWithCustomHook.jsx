import { useCounter } from '../Hooks/useCounter';


export const CounterWithCustomHook = () => {
    
    //para obtener el valor del hook (10) debo desestructurarlo
    //los botones deben estar enlazados a las funciones del hook (en este caso al counter desestructurado)

    const { counter, increment, decrement, reset } = useCounter();


    return (
        <>
            <h1>Counter with Hook: { counter }</h1>
            <hr />

{/* se debe a;adir para cada propiedad que se va a usar en el componente */}
{/* si yo necesito que se incremente el valor del counter en 2, le paso el valor 2 a la funcion increment, y si no le paso nada, se va a incrementar en 1 por default */}
{/* cuando tenemos el onclick lo que hago es pasarle el evento del click a mi funcion de incrementar */}
{/* <button onClick={ (evento) => increment(evento) } className="btn btn-primary">+1</button> */}
            <button onClick={ () => increment(2) } className="btn btn-primary">+1</button>
            <button onClick={ reset } className="btn btn-primary">Reset</button>
            <button onClick={ () => decrement(2) } className="btn btn-primary">-1</button>
        
        </>
    )
}