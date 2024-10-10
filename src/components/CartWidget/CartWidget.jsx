import React from "react";
import "./CartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <div>
      <Link to="/cart"></Link>
      {cantidadTotal > 0 && (
        <span style={{ color: "white" }}>({cantidadTotal})</span>
      )}
      <ShoppingCartIcon className="cart" />
    </div>
  );
};

export default CartWidget;
