import React from 'react'
import {CartContext} from '../context/cart'
import {UserContext} from '../context/user'
import {useHistory} from 'react-router-dom'
import EmptyCart from '../components/Cart/EmptyCart'

// react-stripe-elements
import submitOrder from '../strapi/submitOrder'

const Checkout = (props) => {

  const {cart, total, clearCart} = React.useContext(CartContext)
  const {user, showAlert, hideAlert, alert} = React.useContext(UserContext)
  const history = useHistory()

  // state values
  const [name, setName] = React.useState('')
  const [error, setError] = React.useState('')
  const isEmpty = !name || alert.show

  async function handleSubmit(e) {
    e.preventDefault();
  }

  if (cart.length < 1) return <EmptyCart />

  return (
    <section className="section form">
      <h2 className="section-title">checkout</h2>
      <form className="checkout-form">
        <h4>order total: <span>${total}</span></h4>

        {/* single input */}
        <div className="form-control">
          <label htmlFor="name">name</label>
          <input 
            type="text"
            id="name"
            value={name}
            onChange={ (e) => {
              setName( e.target.value)
            }}
          />
        </div>

      </form>
    </section>
  )
}

export default Checkout
