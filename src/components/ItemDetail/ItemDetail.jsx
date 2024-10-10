import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";

const ItemDetail = ({
  id,
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
    const item = {id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  };

  const manejarVolver = () => {
    setAgregarCantidad(0); 
};

const formatNumber = (number) => {
  return number.toLocaleString("es-AR"); 
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
            <strong>Precio: </strong>${formatNumber(precio)}
          </p>
          <p>
          <strong>Stock: </strong>{stock} 
          </p>
        </div>
        <div className="buyContainer">
                {agregarCantidad > 0 ? (
                    <>
                        <button onClick={manejarVolver} className="btnBack">Volver atrás</button>
                        <Link to="../Cart" className="btnBuy">Ir al carrito</Link>
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
