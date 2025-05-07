import {getGifs} from '../helpers/getGifs';

//en este caso se repetirá el mismo proceso para cada categoría que se pase al componente GifGrid
export const GifGrid = ({category}) => {

getGifs(category);

  return (
    <>
    <h3>{category}</h3>
  </>
  )
}
