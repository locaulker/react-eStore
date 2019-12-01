import React from 'react'
import {FaAngleUp, FaAngleDown} from 'react-icons/fa'
import {CartContext} from '../../context/cart'


const CartItem = ({id, image, title, price, quantity}) => {
  // cart context



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
          console.log('item removed')
        }}
        >remove</button>
      </div>
      <div>
        <button 
          type="button" 
          className="cart-btn amount-btn"
          onClick={ () => {
            console.log('qty increased')
          }}
        >
          <FaAngleUp />
        </button>
          <p className="item-amount">{quantity}</p>
        <button 
          type="button" 
          className="cart-btn amount-btn"
          onClick={ () => {
            console.log('qty decreased')
          }}
        >
          <FaAngleDown />
        </button>
      </div>

    </article>
  )
}

export default CartItem
