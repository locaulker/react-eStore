import React, {useContext} from 'react'
import {ProductContext} from '../context/products'
import Loading from '../components/Loading'
import ProductList from '../components/Products/ProductList'

const Products = () => {
  const {loading, products} =  React.useContext(ProductContext);

  if (loading) {
    return <Loading />
  } else {
    return (
      <ProductList title="all products"  products={products} />
    )
  }
  
}

export default Products
