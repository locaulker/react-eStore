import React from 'react'
import {Link} from 'react-router-dom'


const EmptyCart = () => {
  return (
    <section className="empty-cart section">
      <h3>-- cart is empty --</h3>
      <Link to="/products" className="btn btn-primary">
        shop now
      </Link>
    </section>
  )
}

export default EmptyCart
