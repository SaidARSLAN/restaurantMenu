import React from 'react'

const MenuCard = ({item}) => {
  return (
    <div className='border-2 flex w-full  justify-between items-center px-4 py-2'>
        <div className='text-left'>
        <h1 className='text-xl font-poppins'>{item.name}</h1>
        <h1>{item.type}</h1>
        <h1>{item.ingredients}</h1>
        </div>
        <button className='bg-yellow-400 h-full flex space-x-2 py-4 px-2 hover:bg-black hover:text-yellow-400 duration-300'>
            <span className='text-lg font-poppins'>Buy</span><span className='text-lg font-poppins'>{item.price}</span>
        </button>
    </div>
  )
}

export default MenuCard