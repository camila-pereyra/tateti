import { useState } from "react";
import "./App.css";
import Cuadrado from "../Cuadrado/Cuadrado.jsx";
import { TURNOS, POSICIONES_GANADORAS } from "../constants.js";

function App() {
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [turno, setTurno] = useState(TURNOS.X);
  const [ganador, setGanador] = useState(false);

  const chequearGanador = (tableroAChequear) => {
    for (const posicion of POSICIONES_GANADORAS) {
      const [a, b, c] = posicion;
      if (
        tableroAChequear[a] &&
        tableroAChequear[a] === tableroAChequear[b] &&
        tableroAChequear[a] === tableroAChequear[c]
      ) {
        return tableroAChequear[a];
      }
    }
    return ganador;
  };

  const actualizarTablero = (posicion) => {
    if (tablero[posicion] || ganador !== false) {
      return;
    } else {
      //actualizamos el array que contiene el estado del tablero
      const nuevoTablero = [...tablero];
      nuevoTablero[posicion] = turno;
      setTablero(nuevoTablero);
      //cuando seteamos el tablero hay que chequear si hay un ganador
      const verificacionGanador = chequearGanador(nuevoTablero);
      //si hay un ganador
      if (verificacionGanador !== false) {
        setGanador(verificacionGanador);
      }
      //si no hay ganador
      //chequeamos que no haya empate
      else if (!nuevoTablero.includes(null)) {
        setGanador(null);
      } else {
        turno === TURNOS.X ? setTurno(TURNOS.O) : setTurno(TURNOS.X);
      }
    }
  };

  const resetearJuego = () => {
    setTablero(Array(9).fill(null));
    setTurno(TURNOS.X);
    setGanador(false);
  };
  return (
    <>
      <section>
        <h1>Juego: TA TE TI</h1>
        <div className="tablero">
          {tablero.map((_, index) => (
            <Cuadrado
              key={index}
              index={index}
              actualizarTablero={actualizarTablero}
            >
              {tablero[index]}
            </Cuadrado>
          ))}
        </div>
      </section>
      <section className="turno">
        {ganador === false && <span>Turno de: {turno}</span>}
        {ganador === null && <span>Empate</span>}
        {ganador !== false && ganador !== null && (
          <span>Ganador del juego: {turno}</span>
        )}
      </section>
      {(ganador !== false || ganador === null) && (
        <section className="reseteo">
          <button className="buttonResetear" onClick={resetearJuego}>
            Resetear juego
          </button>
        </section>
      )}
    </>
  );
}

export default App;
