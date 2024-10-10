import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css";
import CloseIcon from "@mui/icons-material/Close";
import "./CartItem.css";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CartContext);

  const subtotal = item.precio * cantidad;

  const formatNumber = (number) => {
    return number.toLocaleString("es-AR");
  };

  return (
    <section className="itemContainer">
      <div>
        <h4>{item.nombre}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: ${formatNumber(item.precio)}</p>
      </div>
      <div className="subDel">
        <p className="subtotal">Subtotal: ${formatNumber(subtotal)}</p>
        <button className="btnDelete" onClick={() => eliminarProducto(item.id)}>
          <CloseIcon />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
