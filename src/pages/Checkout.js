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
          <label htmlFor="name">your name</label>
          <input 
            type="text"
            id="name"
            value={name}
            onChange={ (e) => {
              setName( e.target.value)
            }}
          />
        </div>

        {/* card elements */}
        <div className="stripe-input">
          <label htmlFor="card-element">credit or debit card</label>
        </div>
        <p className="stripe-info">for testing, use: <span>4242 4242 4242 4242</span>
          <br/>enter any 5-digit number for zip code
          <br/>enter any 3-digit number for CVC
        </p>

        {/* STRIPE ELEMENTS */}

        {/* stripe errors */}
          {error && <p className="form-empty">{error}</p>}

        {/* empty value */}
        {isEmpty 
          ? (<p className="form-empty">Error: Name field is required</p>)
          : (<button 
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary btn-block"
            >
              submit
            </button>
          )
        }
      </form>
    </section>
  )
}

export default Checkout
