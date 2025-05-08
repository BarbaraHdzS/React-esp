import { useEffect, useState } from "react";
import { getGifs } from "../helper/getGifs";
//customhook

export const useFetchGifs = (category) => {
    //si yo retorno un objeto, es un hook, no es mas que una funcion que regresa algo 
// pegas aqui el useState normal

//cuando se cargan las imagenes "setImages" recat dispara la renderizacion del componente
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true); //para saber si se esta cargando o no
    
        const getImages = async () => { 
            const newImages = await getGifs(category); 
            setImages(newImages); 
            setIsLoading(false); //cuando se cargan las imagenes "setImages" recat dispara la renderizacion del componente
        }
       
        useEffect(() => {
            getImages(); 
        }, []);

        //el retorno debe ser explicito
    return {
        images: images,
        isLoading: isLoading
    }   
}