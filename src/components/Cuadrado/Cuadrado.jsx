import "./Cuadrado.css";

// eslint-disable-next-line react/prop-types
const Cuadrado = ({ index, children, actualizarTablero }) => {
  const handleClick = () => {
    actualizarTablero(index);
  };

  return (
    <div className="cuadrado" onClick={handleClick}>
      {children}
    </div>
  );
};

export default Cuadrado;
