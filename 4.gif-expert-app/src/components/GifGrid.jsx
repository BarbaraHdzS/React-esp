import {  useState,useEffect } from 'react';
import {getGifs} from '../helper/getGifs';
//en este caso se repetirá el mismo proceso para cada categoría que se pase al componente GifGrid
export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);
    //useState es un hook que permite agregar estado a un componente funcional. En este caso, se está creando una variable de estado llamada images y una función para actualizarla llamada setImages.

    //funcion asincrona que recibe una categoria y devuelve un array de objetos con la información de los gifs
    const getImages = async () => { 
        const newImages = await getGifs(category); //llama a la función getGifs y espera a que se resuelva la promesa
        setImages(newImages); //actualiza el estado con las nuevas imágenes obtenidas
    }
    //Cuando el componente se monte por primera vez, ejecuta la función getGifs(category) una sola vez.
    useEffect(() => {
        getImages(); //llama a la función getImages para obtener las imágenes
    }, []);

getGifs(category);

  return (
    <>
    <h3>{category}</h3>

    <ol>
    {/* Mapea el array de imágenes y devuelve un elemento <li> para cada imagen. La clave única para cada elemento es image.id, lo que ayuda a React a identificar qué elementos han cambiado, agregado o eliminado. */}
    {images.map(({id, title}) => (
        <li key={id}> {title}</li>
        // <GifItem key={id} {...img} /> //destructuro el objeto img y le paso las props al componente GifItem
    ))}
    </ol>
  </>
  )
}
