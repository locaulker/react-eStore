import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.svg'
import CartLink from './Cart/CartLink'


const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Store Logo" className="logo" />
      <nav>
        <ul>
          <div className="page-links">
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/products">products</Link></li>
          </div>

          <div className="cart-auth-links">
            <li><Link to="/login">login</Link></li>
            <CartLink />
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header
