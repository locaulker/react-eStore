import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.svg'
import CartLink from './Cart/CartLink'
import {UserContext} from '../context/user'
import LoginLink from '../components/LoginLink'


const Header = () => {
  const {user} = React.useContext(UserContext)
  return (
    <header className="header">
      <img src={logo} alt="Store Logo" className="logo" />
      <nav>
        <ul>
          <div className="page-links">
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/products">products</Link></li>
            {user.token && (
              <li><Link to="/checkout">checkout</Link></li>
            )}
          </div>

          <div className="cart-auth-links">
            <LoginLink />
            <CartLink />
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header
