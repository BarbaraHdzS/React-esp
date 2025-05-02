import PropTypes from "prop-types"
export const CounterApp = ({value}) => {
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
{/* //lo que esta a lado del onClikc es una expeersion de javascript, y lo que esta entre llaves es un objeto, por eso se le pone el onClick={} */}
             <button onClick={() => console.log('+1')}>
                +1
             </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}