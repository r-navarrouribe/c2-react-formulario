import PropTypes from "prop-types";
export const Paso2 = (props) => {
  const { sumarContador, restarContador, usuario, setUsuario } = props;
  return (
    <form onSubmit={sumarContador}>
      <fieldset className="campo-form d-flex flex-column">
        <legend className="titulo-campo">Datos de acceso</legend>
        <div className="input-campo">
          <label htmlFor="usuario">Escribe tu nombre de usuario</label>
          <input
            type="text"
            id="usuario"
            placeholder="Nombre de usuario"
            required
          />
        </div>
        <div className="input-campo">
          <label htmlFor="password">Escribe tu contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            required
          />
        </div>
        <div className="input-campo">
          <label htmlFor="password-repeat">Confirma la contraseña</label>
          <input
            type="password"
            id="password-repeat"
            placeholder="Repite la contraseña"
          />
        </div>
        <button
          type="button"
          className="boton btn btn-primary"
          onClick={restarContador}
        >
          Anterior
        </button>
        <button type="submit" className="boton btn btn-primary">
          Siguiente
        </button>
      </fieldset>
    </form>
  );
};

Paso2.propTypes = {
  sumarContador: PropTypes.func.isRequired,
  restarContador: PropTypes.func.isRequired,
  usuario: PropTypes.array.isRequired,
  setUsuario: PropTypes.func.isRequired,
};
