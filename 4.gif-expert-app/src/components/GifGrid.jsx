//Es el componente que recibe la categoría como prop y la muestra en un título 
const getGifs = async (category) => {
    const url= `https://api.giphy.com/v1/gifs/search?api_key=q0lzDvGidGYfYL9dKj4vwasIoduM1vM8&q=${category}&limit=10`;

    const resp = await fetch(url);
   
    const {data} = await resp.json();
  
    const gifs = data.map(img => ({
       id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs);
    return gifs;
}

export const GifGrid = ({category}) => {

getGifs(category);

  return (
    <>
    <h3>{category}</h3>
  </>
  )
}
