import React from 'react';

//funtional component
//solo es un boton que incrementa el valor del padre
//el memo sirve para evitar que se vuelva a renderizar el componente si no cambia el valor de las props
//si no se usa el memo, cada vez que se renderiza el padre, se renderiza el hijo
export const ShowIncrement = React.memo( ({ increment }) => {

    //es para ver si se esta volviendo a dibujar el componente
    //si no se usa el memo, cada vez que se renderiza el padre, se renderiza el hijo
    console.log(' Me volví a generar :( ');

    //los objetos isempre apuntas a posiciones de memoria diferentes, entonces cada vez que el componente se vuelve a dibujar, esa funcione es diferente, es decir es un objeto en una pocision de memoria diferente
    //por eso se usa el memo, para que no se vuelva a dibujar el componente si no cambia el valor de las props
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment( 5 );
            }}
        >
            Incrementar
        </button>
    )
})