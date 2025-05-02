import PropTypes from 'prop-types';
//las propTypes son para definir el tipo de dato que se espera en las props

    export const FirstApp = ({title, subTitle}) => {

    return (
        <>
        <h1>{title}</h1>
        <p>{subTitle}</p>
        </>
    )
}

//asi se definen las propTypes
FirstApp.propTypes = {
    //condiciones de las props
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}

//los defaultProps son para definir un valor por defecto en caso de que no se le pase nada a la prop, y entran antes de las propTypes
FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 1234
}