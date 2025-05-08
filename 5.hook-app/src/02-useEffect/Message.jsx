import { useEffect, useState } from "react"


export const Message = () => {
    //podemos mostrar codigo cuando el componente se monta, se actualiza o se desmonta
    //se desmonta para limpiar el efecto secundario

    
    const [coords, setCoords] = useState({ x: 0, y: 0});

 //se hace el cleanup de la funcion de efecto secundario, para que no se acumulen los eventos y no se pierda memoria
    useEffect(() => {
        //cuando el componente se crea por primera vez, se ejecuta el efecto secundario
        const onMouseMove = ({ x, y }) => {
            // const coords = { x, y };
            setCoords({ x, y })
        }

        window.addEventListener( 'mousemove', onMouseMove );
        
        //para remover el efecto secundario, se debe retornar una funcion que se ejecuta cuando el componente se desmonta
        //si no se hace eso voy a intentar un cambio de estado en un componente que ya no existe y eso marca error
      return () => {
        window.removeEventListener( 'mousemove', onMouseMove );
      }
    }, []); //solo se dispara una vez
    


  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify( coords ) }
    </>
  )
}