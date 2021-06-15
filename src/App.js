import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);
  return (
    <>
      <div className="contenedor-general container">
        <Header />
        <Formulario contador={contador} setContador={setContador} />
      </div>
    </>
  );
}

export default App;
