import { useState } from "react";
import "./Cuadrado.css";

// eslint-disable-next-line react/prop-types
const Cuadrado = ({ index, children, actualizarTablero }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    if (isClicked === false) {
      setIsClicked(true);
      actualizarTablero(index);
    }
  };

  return (
    <div className="cuadrado" onClick={handleClick}>
      {children}
    </div>
  );
};

export default Cuadrado;
