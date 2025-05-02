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