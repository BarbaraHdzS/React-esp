import { useEffect, useState } from "react";

// Custom Hook para realizar peticiones HTTP

export const useFetch = ( url ) => {


    //hacemos un useState para manejar el estado de la peticion, si es loading, si hay error, si hay data
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

//para hacerlo mas limpio, se hace el getFetch

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        });
    }

//useEffect para llamar la peticion HTTP cuando el componente se monta o cuando cambia la url
    useEffect(() => {
        getFetch();
    }, [url])
    

//como no regresamos un jxs, se regresa un objeto
    return {
        //vamos a desestructurar el state y lo que regrese aqui es lo que puden regresar los componentes que lo llamen
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError,
    };
}