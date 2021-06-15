import PropTypes from "prop-types";

import { Paso1 } from "./Paso1";
import { Paso2 } from "./Paso2";
import { Paso3 } from "./Paso3";
import { Success } from "./Success";
export const Formulario = (props) => {
  const {
    contador,
    setContador,
    sumarContador,
    restarContador,
    usuario,
    setUsuario,
  } = props;
  const showPaso = () => {
    if (contador === 0) {
      return (
        <Paso1
          sumarContador={sumarContador}
          usuario={usuario}
          setUsuario={setUsuario}
        />
      );
    } else if (contador === 1) {
      return (
        <Paso2
          sumarContador={sumarContador}
          restarContador={restarContador}
          usuario={usuario}
          setUsuario={setUsuario}
        />
      );
    } else if (contador === 2) {
      return (
        <Paso3
          sumarContador={sumarContador}
          restarContador={restarContador}
          usuario={usuario}
        />
      );
    } else {
      return (
        <Success
          usuario={usuario}
          contador={contador}
          setContador={setContador}
        />
      );
    }
  };

  return (
    <section className="pasos row flex-column align-items-center justify-content-center py-4">
      {showPaso()}
    </section>
  );
};

Formulario.propTypes = {
  contador: PropTypes.number.isRequired,
  sumarContador: PropTypes.func.isRequired,
  restarContador: PropTypes.func.isRequired,
  usuario: PropTypes.object.isRequired,
  setUsuario: PropTypes.func.isRequired,
};
