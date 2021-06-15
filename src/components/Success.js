import PropTypes from "prop-types";
export const Success = (props) => {
  const {
    usuario: { nombre, apellidos, fecha, email, usuario, pass },
    setContador,
    contador,
  } = props;
  const modificarDatos = () => {
    setContador(contador - 3);
  };
  return (
    <>
      <h2>¡Felicidades! Ya estás alistado en la marina</h2>
      <p>
        Ahora podrás servir a tu país con mucha honra. Tus datos de usuario son:
      </p>
      <ul className="list-unstyled">
        <li>Nombre: {nombre}</li>
        <li>Apellidos: {apellidos}</li>
        <li>Fecha de nacimiento: {fecha}</li>
        <li>Email: {email}</li>
        <li>Usuario: {usuario}</li>
        <li>Contraseña: {pass}</li>
        <li>Posición: Primera línea de infantería</li>
      </ul>
      <button className="boton btn btn-primary" onClick={modificarDatos}>
        Modificar mis datos
      </button>
    </>
  );
};

Success.propTypes = {
  usuario: PropTypes.object.isRequired,
};
