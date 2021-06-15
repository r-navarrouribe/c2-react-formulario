import PropTypes from "prop-types";
import { useState } from "react";
export const Paso3 = (props) => {
  const { restarContador, sumarContador, usuario, setUsuario } = props;
  const [intentoLogin, setIntentoLogin] = useState("");
  const [intentoPass, setIntentoPass] = useState("");
  const [mensaje, setMensaje] = useState("");
  const loginFail = (e) => {
    alert("El nombre de usuario y/o la contraseña no son correctos");
    setMensaje("El nombre de usuario y/o la contraseña no son correctos");
    e.preventDefault();
  };
  return (
    <form
      className="d-flex flex-column"
      onSubmit={
        intentoLogin === usuario.usuario && intentoPass === usuario.pass
          ? sumarContador
          : loginFail
      }
    >
      <fieldset className="campo-form d-flex justify-content-center alight-items-center flex-column">
        <legend className="titulo-campo">Login</legend>
        <div className="input-campo">
          <label htmlFor="user-login">Escribe tu nombre de usuario</label>
          <input
            type="text"
            id="user-login"
            placeholder="Nombre de usuario"
            onChange={(event) => setIntentoLogin(event.target.value)}
            required
          />
        </div>
        <div className="input-campo">
          <label htmlFor="password-login">Escribe tu contraseña</label>
          <input
            type="password"
            id="password-login"
            placeholder="Contraseña"
            onChange={(event) => setIntentoPass(event.target.value)}
            required
          />
        </div>
        <div className="input-campo flex-row">
          <label htmlFor="pass-remember">¿Recordar contraseña?</label>
          <input type="checkbox" id="pass-remember" />
        </div>
        <p>{mensaje}</p>
        <button
          type="button"
          className="boton btn btn-primary"
          onClick={restarContador}
        >
          Anterior
        </button>
      </fieldset>
      <button type="submit" className="boton btn btn-warning">
        Ready to fight
      </button>
    </form>
  );
};

Paso3.propTypes = {
  sumarContador: PropTypes.func.isRequired,
  restarContador: PropTypes.func.isRequired,
  usuario: PropTypes.object.isRequired,
  setUsuario: PropTypes.func.isRequired,
};
