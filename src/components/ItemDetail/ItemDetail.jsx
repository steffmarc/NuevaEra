import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";

const ItemDetail = ({
  nombre,
  stock,
  precio,
  img,
  descripcion,
  medidas,
  tapizados,
  terminaciones,
  material,
  color,
}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarAlCarrito } = useContext(CartContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { nombre, precio };
    agregarAlCarrito(item, cantidad);
  };

  const manejarVolver = () => {
    setAgregarCantidad(0); 
};

  return (
    <div className="detailContainer">
      <div className="imgContainer">
        <img src={img} alt={nombre} />
      </div>
      <article className="detailInfo">
        <div>
          <h2>{nombre}</h2>
          {descripcion && <p>{descripcion}</p>}
          {medidas && (
            <p>
              <strong>Medidas: </strong>
              {medidas}
            </p>
          )}
          {tapizados && (
            <p>
              <strong>Tapizados: </strong>
              {tapizados}
            </p>
          )}
          {material && (
            <p>
              <strong>Material: </strong>
              {material}
            </p>
          )}
          {terminaciones && (
            <p>
              <strong>Terminaciones: </strong>
              {terminaciones}
            </p>
          )}
          {color && (
            <p>
              <strong>Color: </strong>
              {color}
            </p>
          )}
          <p className="price">
            <strong>Precio: </strong>${precio}
          </p>
          <p>
          <strong>Stock: </strong>{stock} 
          </p>
        </div>
        <div className="buyContainer">
                {agregarCantidad > 0 ? (
                    <>
                        <button onClick={manejarVolver} className="btnBack">Volver</button>
                        <Link to="/cart" className="btnBuy">Finalizar Compra</Link>
                    </>
                ) : (
                    <Counter
                        inicial={1}
                        stock={stock}
                        funcionAgregar={manejadorCantidad}
                    />
                )}
            </div>
      </article>
    </div>
  );
};

export default ItemDetail;
