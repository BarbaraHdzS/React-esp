import PropTypes from "prop-types"

//se define fuera de la funcion para que no se vuelva a crear cada vez que se renderiza el componente
const handleAdd = (event) {
    console.log(event);
}


export const CounterApp = ({value}) => {
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
{/* handleAdd es una funcion que se ejecuta cuando se hace click en el boton, y recibe el evento como parametro */}
             {/* <button onClick={handleAdd}> */}

             {/* se puede pasar una funcion como parametro, y se le puede pasar un segundo parametro, que es el valor que queremos que tenga la funcion al hacer click */}
                <button onClick={handleAdd}>
                +1
             </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}