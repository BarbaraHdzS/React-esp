import { useState } from "react"

//debes llamar a setCategories como prop para poder usarlo en el componente
export const AddCategory = ({setCategories})=> {
    //cada componente tiene su propio estado, no se puede compartir el estado entre componentes

    const [inputValue, setInputValue] = useState('Barbie');
//el target se refiere al elemento que disparo el evento, y se deconstruye para obtener el value
        const onInputChange = ({target}) => {
       console.log(target.value); //esto es lo que se va a mostrar en el input
        
        setInputValue(target.value); //esto es lo que se va a mostrar en el input

    }

    const onSubmit = (event) => {
        event.preventDefault(); //esto es para que no se recargue la pagina al enviar el formulario

        if (inputValue.trim().length <= 1) return; //esto es para que no se agregue un valor vacio o con solo espacios
//se necesita categories como callback para asegurarnos que siempre trabajamos con el estado mas reciente
//setCategories[...categories, inputValue] //esto no es correcto porque categories no se actualiza
        setCategories(categories => [inputValue, ...categories])

        setInputValue(''); //esto es para que el input se limpie al enviar el formulario
    
    }


    return (
        //el form reenvia el evento y recarga la pagina
        //<form onSubmit={(event => onSubmit(event))}> //esto es lo mismo que el de abajo, pero se puede simplificar
        <form onSubmit={onSubmit}>
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