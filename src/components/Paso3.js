import PropTypes from "prop-types";
export const Paso3 = (props) => {
  const { restarContador, usuario, setUsuario } = props;
  return (
    <form>
      <fieldset className="campo-form d-flex justify-content-center alight-items-center flex-column">
        <legend className="titulo-campo">Login</legend>
        <div className="input-campo">
          <label htmlFor="user-login">Escribe tu nombre de usuario</label>
          <input
            type="text"
            id="user-login"
            placeholder="Nombre de usuario"
            required
          />
        </div>
        <div className="input-campo">
          <label htmlFor="password-login">Escribe tu contraseña</label>
          <input
            type="password"
            id="password-login"
            placeholder="Contraseña"
            required
          />
        </div>
        <div className="input-campo flex-row">
          <label htmlFor="pass-remember">¿Recordar contraseña?</label>
          <input type="checkbox" id="pass-remember" />
        </div>
        <button
          type="button"
          className="boton btn btn-primary"
          onClick={restarContador}
        >
          Anterior
        </button>
      </fieldset>
      <button type="submit" className="boton btn btn-primary">
        Ready to fight
      </button>
    </form>
  );
};

Paso3.propTypes = {
  restarContador: PropTypes.func.isRequired,
  usuario: PropTypes.array.isRequired,
  setUsuario: PropTypes.func.isRequired,
};
