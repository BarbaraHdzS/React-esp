import { useState } from "react"

export const GifExpertApp = () => {
//cuando quiero almacenar info y esa info debe cambiar el html, necesito un hook para cambiar el estado (useState)
//es necesairo poner un valor inicial porque el hook no sabe que valor va a tener
const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

console.log(categories);

    return (
        <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

         {/* Input */}

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
