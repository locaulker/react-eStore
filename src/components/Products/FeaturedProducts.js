import React from 'react'
import ProductList from './ProductList'
import {ProductContext} from '../../context/products'
import Loading from '../Loading'


const FeaturedProducts = () => {
  const {loading, featured} = React.useContext(ProductContext)

  if (loading) {
    return <Loading />
  } else {
    return (
      <ProductList
        title="featured products"
        products={featured}
      />
    )
  }

}

export default FeaturedProducts
