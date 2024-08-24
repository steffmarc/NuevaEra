import React from 'react'
import "./CartWidget.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartWidget = () => {
  return (
    <>
    <div className='ShoppingCart'>
        <h3 className='NumCart'>(3)</h3>
        <ShoppingCartIcon className='cart'/>
    </div>
    </>
  )
}

export default CartWidget