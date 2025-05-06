import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

const [categories, setCategories] = useState(['One Punch',  'Dragon Ball']);

//Es una función definida en el componente padre, que recibe la nueva categoría (newCategory) y la agrega al estado (como al array de categorías).
//Aquí es donde realmente se actualiza el estado, es decir, se agrega la categoría nueva a la lista.
const onAddCategory = (newCateggory)=> {

    if(categories.includes(newCateggory)) return; //si ya existe la categoria no la agrego

    setCategories([...categories,newCateggory]) 

}

console.log(categories);

    return (
        <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

         {/* Input */}
         {/* Lo ideal es que mi componente AddCategory lo unico que haga es emitir el valor que yo quiero insertar  */}
        <AddCategory 
        //setCategories={setCategories}
        //onNewCategory es una propiedad
        onNewCategory={(value) => onAddCategory(value)} //mi onNewCategpoy va a emitir el valor que yo quiero insertar
        />

          {/* Listado de Gif */}
          <button onClick={onAddCategory}>Agregar</button>
          <ol>
                {/* aqui va cada categoria */}
            {categories.map((category) => {
                return <li key={category}>{category}</li>
            })}
        
          </ol>
                {/* Gif Item */}
        </>
    )
}
