import React from 'react'

/**
 * Componente que muestra un mensaje de carga
 * 
 * Este componente se utiliza para indicar al usuario que los datos
 * están siendo cargados. Es mostrado mientras se espera la respuesta
 * de la API de Pokémon.
 * 
 * @returns {JSX.Element} - Elemento de React con el mensaje de carga
 */
export const LoadingMessage = () => {
  return (
    <section 
      style={{  height: 200 }}    // Altura fija para mantener consistencia con PokemonCard
      className="alert alert-info text-center p-0 m-0 d-flex align-items-center justify-content-center"
    >
      <h1>Cargando</h1>   {/* Mensaje simple de carga */}
    </section>
  )
}