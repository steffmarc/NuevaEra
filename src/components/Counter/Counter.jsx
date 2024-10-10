import { useState } from "react";
import "./Counter.css";

const Counter = ({ inicial, stock, funcionAgregar }) => {
  const [counter, setCounter] = useState(inicial);

  const increase = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrease = () => {
    if (counter > inicial) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="buyContainer">
      <div className="counterContainer">
        <button className="btnCount" onClick={decrease}>
          {" "}
          -{" "}
        </button>
        <strong>{counter}</strong>
        <button className="btnCount" onClick={increase}>
          {" "}
          +{" "}
        </button>
      </div>

      <button className="btnBuy" onClick={() => funcionAgregar(counter)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
