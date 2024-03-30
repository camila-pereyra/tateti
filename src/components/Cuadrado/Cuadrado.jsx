import "./Cuadrado.css";

// eslint-disable-next-line react/prop-types
const Cuadrado = ({ posicion, tablero, actualizarTablero }) => {
  const handleClick = (posicion) => {
    actualizarTablero(posicion);
  };

  return (
    <div className="cuadrado" onClick={handleClick}>
      {tablero[posicion]}
    </div>
  );
};

export default Cuadrado;
