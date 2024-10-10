import React from 'react'
import "./CartWidget.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';



const CartWidget = () => {
  const {cantidadTotal} = useContext(CartContext)

  return (
    <div>
      <Link to="/cart">
      <ShoppingCartIcon className='cart'/>
      </Link>
        {
          cantidadTotal > 0 && <span>{cantidadTotal}</span>
        }

        
    </div>
  )
}

export default CartWidget