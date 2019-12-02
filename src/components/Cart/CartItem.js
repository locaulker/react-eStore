import React from 'react'
import {FaAngleUp, FaAngleDown} from 'react-icons/fa'
import {CartContext} from '../../context/cart'


const CartItem = ({id, image, title, price, quantity}) => {
  // cart context
  const { removeItem, increaseQuantity, decreaseQuantity } = React.useContext(CartContext)


  return (
    <article className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h5>{title}</h5>
        <h4>${price}</h4>
        <button 
        type="button" 
        className="cart-btn remove-btn"
        onClick={ () => {
          removeItem(id)
        }}
        >remove</button>
      </div>
      <div>
        <button 
          type="button" 
          className="cart-btn amount-btn"
          onClick={ () => {
            increaseQuantity(id)
          }}
        >
          <FaAngleUp />
        </button>
          <p className="item-amount">{quantity}</p>
        <button 
          type="button" 
          className="cart-btn amount-btn"
          onClick={ () => {
            decreaseQuantity(id, quantity)
          }}
        >
          <FaAngleDown />
        </button>
      </div>

    </article>
  )
}

export default CartItem
