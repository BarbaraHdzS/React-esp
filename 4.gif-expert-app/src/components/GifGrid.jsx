import { useState, useEffect } from 'react';
import {getGifs} from '../helper/getGifs';
//en este caso se repetirá el mismo proceso para cada categoría que se pase al componente GifGrid
export const GifGrid = ({category}) => {

    //estado para almacenar los gifs
    //Crea una variable de estado llamada counter, que empieza con el valor 10, y una función setCounter que se usa para cambiar ese valor.
    const [counter, setCounter] = useState(10);

    //Cuando el componente se monte por primera vez, ejecuta la función getGifs(category) una sola vez.
    useEffect(() => {
        getGifs(category);
    }, []);

getGifs(category);

  return (
    <>
    <h3>{category}</h3>
  </>
  )
}
