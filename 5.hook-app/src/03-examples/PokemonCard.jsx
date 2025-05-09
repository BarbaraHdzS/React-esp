import React from 'react';

/**
 * Componente para mostrar la información de un Pokémon
 * 
 * Muestra el ID, nombre y sprites (imágenes) del Pokémon seleccionado.
 * Recibe los datos desde el componente MultipleCustomHooks.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {number} props.id - ID del Pokémon
 * @param {string} props.name - Nombre del Pokémon
 * @param {string[]} props.sprites - Array con las URLs de las imágenes del Pokémon
 * @returns {JSX.Element} - Elemento de React con la información del Pokémon
 */
export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section style={{ height: 200 }}>  {/* Altura fija para mantener consistencia en el diseño */}
      <h2 className="text-capitalize">#{id} - { name }</h2>  {/* Muestra ID y nombre del Pokémon */}

      {/* Sección de imágenes/sprites del Pokémon */}
      <div>
        {
          /* Mapea cada URL de sprite para crear una imagen */
          sprites.map( sprite => (
            <img key={ sprite } src={ sprite } alt={ name }  />
          ))
        }
      </div>

    </section>
  )
}