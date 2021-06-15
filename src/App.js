import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { useState } from "react";

function App() {
  const [usuario, setUsuario] = useState([
    { nombre: "", apellidos: "", fecha: "", email: "", usuario: "", pass: "" },
  ]);
  const [contador, setContador] = useState(0);
  const sumarContador = () => {
    setContador(contador + 1);
  };
  const restarContador = () => {
    setContador(contador - 1);
  };
  return (
    <>
      <div className="contenedor-general container">
        <Header />
        <Formulario
          contador={contador}
          setContador={setContador}
          sumarContador={sumarContador}
          restarContador={restarContador}
          usuario={usuario}
          setUsuario={setUsuario}
        />
      </div>
    </>
  );
}

export default App;
