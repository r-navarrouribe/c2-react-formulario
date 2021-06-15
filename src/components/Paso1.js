export const Paso1 = () => {
  return (
    <fieldset className="campo-form d-flex justify-content-center alight-items-center flex-column">
      <legend className="titulo-campo">Datos personales</legend>
      <div className="input-campo">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" placeholder="Escribe tu nombre" />
      </div>
      <div className="input-campo">
        <label htmlFor="apellidos">Apellidos</label>
        <input type="text" id="apellidos" placeholder="Escribe tus apellidos" />
      </div>
      <div className="input-campo">
        <label htmlFor="fecha">Fecha de nacimiento</label>
        <input type="date" id="fecha" />
        <span>Edad: 20 años</span>
      </div>
      <div className="input-campo">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Escribe tu Email" />
      </div>
    </fieldset>
  );
};
