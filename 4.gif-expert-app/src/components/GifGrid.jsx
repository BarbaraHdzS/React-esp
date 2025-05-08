
import { GiftItem } from './GiftItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { getGifs } from '../helper/getGifs';


//en javascript no se puede usar la palabra "class" para usar un style, por eso se usa "className"

export const GifGrid = ({category}) => {

    //estoy creando un hook desde cero
    //cuando esta vacio es que le puedes pasar cualquier objeto
    //este hook se lo pasas a la funcion useFetchGifs y le pasas la categoria
    const {images, isLoading} = useFetchGifs(category);


  return (
    <>
    <h3>{category}</h3>
    {/* si isLoading es true, muestra el loading */}
    {isLoading && (<h2>Cargando...</h2>)}


{/* se necesita un componente que recorra el array de objetos y muestre la información de cada uno de ellos */}
    <div className='card-grid'>
    
    {
    images.map((image) => (
        <GiftItem 
        key={image.id}
       //exparsir el objeto image para que se le pasen todas las propiedades al componente GiftItem
       {...image}
        />
    ))
    }
    </div>
  </>
  )
}
