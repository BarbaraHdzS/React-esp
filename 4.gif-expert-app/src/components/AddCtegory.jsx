import { useState } from "react"

export const AddCategory = ()=> {
    //cada componente tiene su propio estado, no se puede compartir el estado entre componentes

    const [inputValue, setInputValue] = useState('Barbie');

        const onInputChange = ({target}) => {
       console.log(target.value); //esto es lo que se va a mostrar en el input
        
        setInputValue(target.value); //esto es lo que se va a mostrar en el input

    }



    return (
        <input
            type="text"
            placeholder="Buscar Gif"
            value={inputValue}
            //
            //onChange={(event) => onInputChange(event)} //cuando el input cambie, se va a ejecutar la funcion onInputChange
            onChange={onInputChange}
             />
            
    )
}
// export default AddCategory