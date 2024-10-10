import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { carrito, total, cantidadTotal, vaciarCarrito } =
    useContext(CartContext);

  if (cantidadTotal === 0) {
    return (
      <div>
        <h2>El carrito de compras esta vacío</h2>
        <div style={{ textAlign: "center", width: "100%" }}>
          <Link
            to="/"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#D5A6A4",
              color: "#fff",
              borderRadius: "5px",
              textDecoration: "none",
              margin: "25px",
            }}
          >
            Ver Productos
          </Link>
        </div>
      </div>
    );
  }

  const formatNumber = (number) => {
    return number.toLocaleString("es-AR");
  };

  return (
    <section className="cartContainer">
      <h1 className="cartTitle">CARRITO DE COMPRAS</h1>
      <div>
        <h3 style={{ fontWeight: "600", color: "#D5A6A4", textAlign: "start" }}>
          Productos
        </h3>
        {carrito.map((producto) => (
          <CartItem key={producto.item.id} {...producto} />
        ))}
      </div>
      <h2 className="cartInfo">Total a pagar: ${formatNumber(total)}</h2>
      <div className="buttonContainer">
        <button onClick={() => vaciarCarrito()} className="vaciarCarritoBtn">
          Vaciar Carrito
        </button>
        <Link to="/checkout" className="finalizarCompraLink">
          Iniciar Compra
        </Link>
      </div>
    </section>
  );
};

export default Cart;
