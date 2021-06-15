import PropTypes from "prop-types";
import { useState } from "react";

export const Paso1 = (props) => {
  const { sumarContador, usuario, setUsuario } = props;
  console.log(usuario);
  return (
    <form onSubmit={sumarContador}>
      <fieldset className="campo-form d-flex justify-content-center alight-items-center flex-column">
        <legend className="titulo-campo">Datos personales</legend>
        <div className="input-campo">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            placeholder="Escribe tu nombre"
            onChange={(event) =>
              setUsuario({ ...usuario, nombre: event.target.value })
            }
            required
          />
        </div>
        <div className="input-campo">
          <label htmlFor="apellidos">Apellidos</label>
          <input
            type="text"
            id="apellidos"
            placeholder="Escribe tus apellidos"
            onChange={(event) =>
              setUsuario({ ...usuario, apellidos: event.target.value })
            }
            required
          />
        </div>
        <div className="input-campo">
          <label htmlFor="fecha">Fecha de nacimiento</label>
          <input
            type="date"
            id="fecha"
            onChange={(event) =>
              setUsuario({ ...usuario, fecha: event.target.value })
            }
            required
          />
          <span>Edad: 20 años</span>
        </div>
        <div className="input-campo">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Escribe tu Email"
            onChange={(event) =>
              setUsuario({ ...usuario, email: event.target.value })
            }
            required
          />
        </div>
        <button
          type="submit"
          className="boton btn btn-primary"
          value="Siguiente"
        >
          Siguiente
        </button>
      </fieldset>
    </form>
  );
};

Paso1.propTypes = {
  sumarContador: PropTypes.func.isRequired,
  usuario: PropTypes.object.isRequired,
  setUsuario: PropTypes.func.isRequired,
};
