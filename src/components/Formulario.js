import { Paso1 } from "./Paso1";
import { Paso2 } from "./Paso2";
import { Paso3 } from "./Paso3";

export const Formulario = (props) => {
  const { contador, setContador } = props;
  const showPaso = () => {
    if (contador === 0) {
      return <Paso1 />;
    } else if (contador === 1) {
      return <Paso2 />;
    } else {
      return <Paso3 />;
    }
  };
  return (
    <form className="pasos row flex-column align-items-center justify-content-center py-4">
      {showPaso()}
      <button type="boton-submit submit">Ready to fight</button>
    </form>
  );
};
