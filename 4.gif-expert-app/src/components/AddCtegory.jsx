import { useState } from "react"

export const AddCategory = ()=> {
    //cada componente tiene su propio estado, no se puede compartir el estado entre componentes

    const [inputValue, setInputValue] = useState('Barbie');
//el target se refiere al elemento que disparo el evento, y se deconstruye para obtener el value
        const onInputChange = ({target}) => {
       console.log(target.value); //esto es lo que se va a mostrar en el input
        
        setInputValue(target.value); //esto es lo que se va a mostrar en el input

    }

    const onSubmit = (event) => {
        event.preventDefault(); //esto es para que no se recargue la pagina al enviar el formulario
        console.log(inputValue); //muetsra en la consola el valor que el usuario escribio 
    
    }


    return (
        //el form reenvia el evento y recarga la pagina
        <form onSubmit={(event => onSubmit(event))}>
        <input
            type="text"
            placeholder="Buscar Gif"
            value={inputValue}
            //
            //onChange={(event) => onInputChange(event)} //cuando el input cambie, se va a ejecutar la funcion onInputChange
            onChange={onInputChange}
             />
            </form>
    )
}
// export default AddCategory