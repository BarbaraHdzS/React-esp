import { useState } from "react";

//Es un componente hijo que recibe una función como prop llamada onNewCategory.
//Esa función se usa dentro del componente cuando el usuario agrega una nueva categoría.
//En otras palabras, AddCategory no decide qué hacer con la categoría nueva, solo se la pasa al componente padre mediante onNewCategory.
export const AddCategory = ({onNewCategory})=> {
  

    const [inputValue, setInputValue] = useState('');

        const onInputChange = ({target}) => {
        setInputValue(target.value);

    }

    const onSubmit = (event) => {
        event.preventDefault(); 

        if (inputValue.trim().length <= 1) return; 

        // setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim()); //llamo a la funcion que me pasaron por props y le paso el valor del input
        setInputValue('');
    
    }


    return (
        
        <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Buscar Gif"
            value={inputValue}
          
            onChange={onInputChange}
             />
            </form>
    )
}
