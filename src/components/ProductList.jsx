import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext'
import Product from './Product'

const ProductList = () => {
    const {filterFoods} = useContext(GlobalContext)
  return (
    <div>
        {filterFoods.map((food,idx) => {
                return <Product food={food} key={idx}/>
        })}
    </div>
  )
}

export default ProductList