import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"


const Cart = () => {
 const {cart, total, totalAmount, emptyCart} = useContext(CartContext)

 if (totalAmount === 0) {
    return (
        <>
            <h2>Todavía no seleccionaste ningún producto, podes hacerlo desde el siguiente link:</h2>
            <Link to="/">Ver Productos</Link>
        </>

    )
 }

  return (
    <div>
        {
            cart.map(producto => <CartItem key={producto.item.id} {...producto}/>)
        }

        <h3>Total: ${total}</h3>
        <h3>Cantidad Total: {totalAmount}</h3>
        <button onClick={()=> emptyCart()}> Vaciar Carrito </button>
        <Link to="/checkout">Finalizar Compra</Link>

    </div>
  )
}

export default Cart