import React from 'react'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <>
        <Hero>
          <Link to="/products" className="btn btn-primary btn-hero">
            see our products
          </Link>
        </Hero>
      </>
    </div>
  )
}

export default Home
