import PropTypes from "prop-types";
import { useState } from "react";
export const Paso2 = (props) => {
  const { sumarContador, restarContador, usuario, setUsuario } = props;
  const [confirmaContrasenya, setConfirmaContrasenya] = useState("");
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
            onChange={(event) =>
              setUsuario({ ...usuario, usuario: event.target.value })
            }
            required
          />
        </div>
        <div className="input-campo">
          <label htmlFor="password">Escribe tu contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            onChange={(event) =>
              setUsuario({ ...usuario, pass: event.target.value })
            }
            required
          />
        </div>
        <div className="input-campo">
          <label htmlFor="password-repeat">Confirma la contraseña</label>
          <input
            type="password"
            id="password-repeat"
            placeholder="Repite la contraseña"
            onChange={(event) => setConfirmaContrasenya(event.target.value)}
          />
          <p className={confirmaContrasenya === usuario.pass ? "off" : ""}>
            Las contraseñas deben coincidir
          </p>
        </div>
        <button
          type="button"
          className="boton btn btn-primary"
          onClick={restarContador}
        >
          Anterior
        </button>
        <button
          type="submit"
          className="boton btn btn-primary"
          disabled={confirmaContrasenya === usuario.pass ? false : true}
        >
          Siguiente
        </button>
      </fieldset>
    </form>
  );
};

Paso2.propTypes = {
  sumarContador: PropTypes.func.isRequired,
  restarContador: PropTypes.func.isRequired,
  usuario: PropTypes.object.isRequired,
  setUsuario: PropTypes.func.isRequired,
};
