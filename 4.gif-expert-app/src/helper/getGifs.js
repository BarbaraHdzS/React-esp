//Es el componente que recibe la categoría como prop y la muestra en un título 

//funcion asincrona que recibe una categoria y devuelve un array de objetos con la información de los gifs
export const getGifs = async (category) => {

    //Crea la URL para buscar GIFs relacionados con la categoría. Busca gifs relacionados con la categoría que se le pasa como argumento.
    const url= `https://api.giphy.com/v1/gifs/search?api_key=q0lzDvGidGYfYL9dKj4vwasIoduM1vM8&q=${category}&limit=10`;

// hace la solicitud a la API, await espera a que la respuesta llegue antes de continuar
    const resp = await fetch(url);

   //convierte la respuesta a JSON y extrae la propiedad data(donde vienen los gifts) de la respuesta
   //La respuesta (resp) no es directamente usable como un objeto de JavaScript. Es un objeto de tipo Response, que contiene los datos sin procesar.Para poder usar esos datos (como acceder a data, title, etc.), necesitas convertirlos a formato JavaScript.
    const {data} = await resp.json();
  
    //recorre el objeto 
    const gifs = data.map(img => ({
       id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}