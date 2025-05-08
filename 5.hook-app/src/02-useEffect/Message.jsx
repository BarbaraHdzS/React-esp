import { useEffect, useState } from "react"


export const Message = () => {
    //podemos mostrar codigo cuando el componente se monta, se actualiza o se desmonta
    //se desmonta para limpiar el efecto secundario
    const [coords, setCoords] = useState({ x: 0, y: 0});

    
    useEffect(() => {
        
        const onMouseMove = ({ x, y }) => {
            // const coords = { x, y };
            setCoords({ x, y })
        }

        window.addEventListener( 'mousemove', onMouseMove );
        
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