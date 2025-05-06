import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

const [categories, setCategories] = useState(['One Punch']);

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
       

          {/* se tiene que crear un componente que sirva para agrupar los gifs por categoria */}
    
            {
                //map recorre el array de categorias y por cada categoria crea un componenete GifGrid
            categories.map((category) => (
               <GifGrid key={category} 
               // componentes no pueden acceder directamente a variables que no son suyas.
               category={category}/> 
            ))
        }
        
        
        </>
    )
}
