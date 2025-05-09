import { useEffect, useState } from 'react';

/**
 * Cache local para almacenar resultados de peticiones previas
 * Evita realizar peticiones repetidas a la misma URL
 */
const localCache = {};

/**
 * Custom Hook para realizar peticiones HTTP
 * @param {string} url - URL a la que se realizará la petición
 * @returns {Object} - Objeto con la data obtenida, estado de carga y errores
 */
export const useFetch = ( url ) => {
  
  // Estado inicial de la petición
  const [state, setState] = useState({
    data: null,           // Datos recibidos de la API
    isLoading: true,      // Indicador de carga
    hasError: false,      // Indicador de error
    error: null,          // Detalles del error
  });

  // Efecto que se ejecuta cuando cambia la URL
  useEffect(() => {
    getFetch(); // Realiza la petición cuando cambia la URL
  }, [url]);

  /**
   * Función para establecer el estado de carga
   * Reinicia el estado cuando se va a realizar una nueva petición
   */
  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  }

  /**
   * Función asíncrona para realizar la petición HTTP
   * Implementa manejo de caché, errores y actualización de estado
   */
  const getFetch = async() => {

    // Si la URL ya está en caché, usa los datos guardados
    if ( localCache[url] ) {
      console.log('Usando caché');
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }

    // Establece estado de carga antes de realizar la petición
    setLoadingState();

    // Realiza la petición HTTP
    const resp = await fetch(url);

    // Simula un retraso de 1.5 segundos (para visualizar estados de carga)
    await new Promise( resolve => setTimeout(resolve, 1500) );

    // Manejo de errores en la respuesta
    if ( !resp.ok ) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        }
      });
      return;
    }
  
    // Obtiene los datos de la respuesta
    const data = await resp.json();
    
    // Actualiza el estado con los datos obtenidos
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    })

    // Guarda los datos en caché para futuras peticiones
    localCache[url] = data;
  }
  
  // Devuelve solo los datos necesarios para el componente
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}