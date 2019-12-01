import React from 'react'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import FeaturedProducts from '../components/Products/FeaturedProducts'


const Home = () => {
  return (
    <div>
      <>
        <Hero>
          <Link to="/products" className="btn btn-primary btn-hero">
            see our products
          </Link>
        </Hero>
        <FeaturedProducts>
          
        </FeaturedProducts>
      </>
    </div>
  )
}

export default Home
