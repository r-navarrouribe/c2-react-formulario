export const Paso3 = () => {
  return (
    <fieldset className="campo-form d-flex justify-content-center alight-items-center flex-column">
      <legend className="titulo-campo">Login</legend>
      <div className="input-campo">
        <label htmlFor="user-login">Nombre de usuario</label>
        <input type="text" id="user-login" placeholder="Nombre de usuario" />
      </div>
      <div className="input-campo">
        <label htmlFor="password-login">Contraseña</label>
        <input type="password" id="password-login" placeholder="Contraseña" />
      </div>
      <div className="input-campo">
        <label htmlFor="pass-remember">¿Recordar contraseña?</label>
        <input type="checkbox" id="pass-remember" />
      </div>
    </fieldset>
  );
};
