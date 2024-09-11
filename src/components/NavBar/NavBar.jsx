import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <header>
        <nav>
          <Link to="/">
          <img className='logo' src="../../../Img/nueva era blanco@300x.png" alt="Nueva Era Logo" />
          </Link>

            <ul>
                <li><NavLink to="/category/living">Living</NavLink></li>
                <li><NavLink to="/category/comedor">Comedor</NavLink></li>
                <li><NavLink to="/category/dormitorio">Dormitorio</NavLink></li>
            </ul>
            <CartWidget/>
        </nav>
    </header>
  )
}

export default NavBar