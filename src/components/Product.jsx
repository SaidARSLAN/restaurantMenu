import React from 'react'

const Product = ({food}) => {
  return (
    <div className='border-2 px-2 py-1 '>
                    <div>{food.name}</div>
                    <div>{food.ingredients}</div>
                    <div>{food.type}</div>
                </div>
  )
}

export default Product