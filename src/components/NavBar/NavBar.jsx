import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
  return (
    <header>
        <nav>
            <img className='logo' src="../../../Img/nueva era blanco@300x.png" alt="Nueva Era Logo" />
            <ul>
                <li>Living</li>
                <li>Comedor</li>
                <li>Dormitorios</li>
                <li>Oficina</li>
                <li>Exterior</li>
            </ul>
            <CartWidget/>
        </nav>
    </header>
  )
}

export default NavBar