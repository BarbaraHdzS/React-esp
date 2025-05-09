import { useRef } from 'react';

export const FocusScreen = () => {

// Se utiliza para acceder a un elemento del DOM sin necesidad de usar useEffect o useState
//nos permite mantener una referencia a un elemento del DOM y manipularlo directamente, y cuando esa referencia cambia, el componente no se vuelve a renderizar
    const inputRef = useRef();

    const onClick = () => {
        // document.querySelector('input').select();
        // console.log(inputRef);
        //es para que guarde los cambios en el input y no se pierdan al hacer click
        inputRef.current.select();
    }


  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
        //se debe poner el ref en el input para que funcione
  
            ref={ inputRef }
            type="text" 
            placeholder="Ingrese su nombre"
            className="form-control"
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={ onClick }
        >
            Set focus
        </button>

    </>
  )
}