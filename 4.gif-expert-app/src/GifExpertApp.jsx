import { useState } from "react"

export const GifExpertApp = () => {
//cuando quiero almacenar info y esa info debe cambiar el html, necesito un hook para cambiar el estado (useState)
//es necesairo poner un valor inicial porque el hook no sabe que valor va a tener
const [categories, setCategories] = useState(['One Punch',  'Dragon Ball']);

const onAddCategory = ()=> {
    //categories.push('Barbie') //no se puede hacer esto porque no se actualiza el estado, no se renderiza el html
    setCategories([...categories,'Barbie']) //esto si se puede hacer porque setCategories es una funcion que actualiza el estado y renderiza el html

}

console.log(categories);

    return (
        <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

         {/* Input */}
         <button onClick={onAddCategory}>Agregar</button>

          {/* Listado de Gif */}
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
