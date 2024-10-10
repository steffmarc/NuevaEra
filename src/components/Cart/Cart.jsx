import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"


const Cart = () => {
 const {carrito, total, cantidadTotal, vaciarCarrito} = useContext(CartContext)

 if (cantidadTotal === 0) {
    return (
        <>
            <h2>No hay productos en el carrito. Compra o vete!!!</h2>
            <Link to="/">Ver Productos</Link>
        </>

    )
 }

  return (
    <div>
        {
            carrito.map(producto => <CartItem key={producto.item.id} {...producto}/>)
        }

        <h3>Total: ${total}</h3>
        <h3>Cantidad Total: {cantidadTotal}</h3>
        <button onClick={()=> vaciarCarrito()}> Vaciar Carrito </button>
        <Link to="/checkout">Finalizar Compra</Link>

    </div>
  )
}

export default Cart