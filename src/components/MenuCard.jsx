import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MenuCard = ({item}) => {
  return (
    <div className='border-2 flex w-full  justify-center lg:justify-between items-center px-4 shadow-lg py-2 lg:px-8 lg:py-8 lg:h-[480px]'>
        <div className='text-left flex flex-col'>
        <img src={item.img} className='my-2 w-[400px] h-[240px]'/>
        <div className='flex w-full justify-between items-center'>
        <div>
          
        <h1 className='text-xl font-poppins'>{item.name}</h1>
        <h1 className='font-mulish text-sm'>{item.ingredients.map((ing,idx) => {return <li key={idx}>{ing}</li>})}</h1>
        </div>
        <button className='bg-yellow-400 flex w-[100px] items-center justify-center my-2 space-x-2 py-4 px-2 hover:bg-black hover:text-yellow-400 duration-300'>
            <span className='text-sm font-poppins'><FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon></span><span className='text-sm font-poppins'>{item.price} $</span>
        </button>
        </div>
        </div>
        
    </div>
  )
}

export default MenuCard