import { useState } from "react";
import "./App.css";
import Cuadrado from "./components/Cuadrado/Cuadrado";
//turnos del juego
const TURNOS = {
  X: "x",
  O: "o",
};

function App() {
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [turno, setTurno] = useState(TURNOS.X);
  const actualizarTablero = (posicion) => {
    const nuevoTablero = [...tablero];
    nuevoTablero[posicion] = turno;
    setTablero(nuevoTablero);
    turno === TURNOS.X ? setTurno(TURNOS.O) : setTurno(TURNOS.X);
  };
  return (
    <>
      <section>
        <h1>Juego: TA TE TI</h1>
        <div className="tablero">
          {tablero.map((_, index) => (
            <Cuadrado
              posicion={index}
              key={index}
              tablero={tablero}
              actualizarTablero={actualizarTablero}
            />
          ))}
        </div>
      </section>
      <section className="turno">
        <span>Turno de: {turno}</span>
      </section>
    </>
  );
}

export default App;
