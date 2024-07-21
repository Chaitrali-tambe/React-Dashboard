import React from 'react'
import Product from '../components/product/Product'
import ProductDataGrid from '../components/datagrids/ProductDataGrid'

const ProductPage = () => {
  return (
    <div style={{height:'100vh'}}>
      <div className='header'>
        PRODUCTS
      </div>
      <Product/>
    </div>
  )
}

export default ProductPage