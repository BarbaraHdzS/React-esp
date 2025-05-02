import PropTypes from 'prop-types';

// Primero define la función sin exportarla
function FirstApp({ title, subTitle }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </>
  );
}

// Aplica los propTypes y defaultProps
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
  title: 'No hay título',
  subTitle: 1234,
};

// Exporta al final
export { FirstApp };