import React from 'react';
import { useCounter, useFetch } from '../hooks';  // Importamos nuestros custom hooks
import { LoadingMessage } from './LoadingMessage';  // Componente para mostrar durante la carga
import { PokemonCard } from './PokemonCard';  // Componente para mostrar los datos del Pokémon

/**
 * Componente principal que muestra información de Pokémon
 * 
 * Este componente utiliza dos custom hooks:
 * - useCounter: Para manejar el ID del Pokémon actual
 * - useFetch: Para obtener los datos del Pokémon desde la API
 * 
 * Permite navegar entre diferentes Pokémon usando los botones de anterior y siguiente.
 * 
 * @returns {JSX.Element} - Elemento de React con la interfaz de información del Pokémon
 */
export const MultipleCustomHooks = () => {

  // Hook para manejar el contador que sirve como ID del Pokémon (inicia en 1)
  const { counter, decrement, increment } = useCounter(1);
  
  // Hook para realizar la petición a la API de Pokémon con el ID actual
  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr />

      {/* 
        Renderizado condicional:
        - Si está cargando, muestra el componente LoadingMessage
        - Si ya cargó, muestra la información del Pokémon en el componente PokemonCard
      */}
      { 
        isLoading 
        ? <LoadingMessage /> 
        : (
          <PokemonCard 
            id={ counter }  // ID actual del Pokémon (controlado por useCounter)
            name={ data.name }  // Nombre obtenido de la API
            sprites={ [  // Arreglo con las diferentes versiones de sprites
              data.sprites.front_default,
              data.sprites.front_shiny,
              data.sprites.back_default,
              data.sprites.back_shiny,
            ] }
          />
        )
      }

      {/* Botones de navegación */}
      <button
        className="btn btn-primary mt-2"
        onClick={ () => counter > 1 ? decrement() : null }  // Evita decrementar si ya está en el Pokémon #1
      >
        Anterior
      </button>
      <button
        className="btn btn-primary mt-2"
        onClick={ () => increment() }  // Incrementa para ir al siguiente Pokémon
      >
        Siguiente
      </button>
    </>
  )
}