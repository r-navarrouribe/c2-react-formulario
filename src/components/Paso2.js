export const Paso2 = (props) => {
  const { sumarContador, restarContador } = props;
  return (
    <fieldset className="campo-form d-flex flex-column">
      <legend className="titulo-campo">Datos de acceso</legend>
      <div className="input-campo">
        <label htmlFor="usuario">Nombre de usuario</label>
        <input type="text" id="usuario" placeholder="Nombre de usuario" />
      </div>
      <div className="input-campo">
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" placeholder="Contraseña" />
      </div>
      <div className="input-campo">
        <label htmlFor="password-repeat">Repite la contraseña</label>
        <input type="password" id="password-repeat" placeholder="Contraseña" />
      </div>
      <button
        type="button"
        className="boton btn btn-primary"
        onClick={restarContador}
      >
        Anterior
      </button>
      <button
        type="button"
        className="boton btn btn-primary"
        onClick={sumarContador}
      >
        Siguiente
      </button>
    </fieldset>
  );
};
