import React from 'react'

const Product = ({food}) => {
  return (
    <div className='border-2 border-gray rounded-sm px-2 py-1 my-4 group hover:bg-dark duration-200 cursor-pointer'>
                    <div className='font-poppins text-dark group-hover:text-white duration-200'>{food.name}</div>
                    <div className='font-mulish text-dark font-bold group-hover:text-white duration-200'>{food.ingredients}</div>
                    <div className='font-mulish text-dark font-bold group-hover:text-white duration-200'>{food.type}</div>
                </div>
  )
}

export default Product