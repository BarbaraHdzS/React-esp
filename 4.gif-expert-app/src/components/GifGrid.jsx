import {  useState,useEffect } from 'react';
import {getGifs} from '../helper/getGifs';
import { GiftItem } from './GiftItem';

//en javascript no se puede usar la palabra "class" para usar un style, por eso se usa "className"

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);
    

   
    const getImages = async () => { 
        const newImages = await getGifs(category); 
        setImages(newImages); 
    }
   
    useEffect(() => {
        getImages(); 
    }, []);

getGifs(category);

  return (
    <>
    <h3>{category}</h3>

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
