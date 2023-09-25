import React, { useContext, useEffect, useRef, useState } from 'react'
import GlobalContext from '../context/MainContext'
import MenuCard from '../components/MenuCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
  const {loading,filterMenu,handleBack,handlNext,stepMenu} = useContext(GlobalContext)
  const titles = ["Breakfast","Meal","Pizza","Salad","Sweet","Drink"];


  

  
  

  return (
    <section className='flex flex-col  text-center pt-4 w-full items-center justify-center' id='menu'>
      <div className='flex space-x-4 my-8 items-center'>
        <button className={stepMenu === 0 ? "text-2xl text-gray-400 cursor-default" : 'text-2xl  text-black hover:text-yellow-400 duration-200'} onClick={handleBack}><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></button>
        <h1 className='w-[100px] mx-auto text-lg font-poppins'>{titles[stepMenu]}</h1>
        <button className={stepMenu === titles.length -1 ? "text-2xl text-gray-400 cursor-default" : 'text-2xl text-black hover:text-yellow-400 duration-200'} onClick={handlNext} ><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></button>
      </div>
    <div className='flex flex-col text-center pt-4 w-full items-center justify-center lg:grid lg:grid-cols-3 lg:gap-8 lg:px-24'>
      {loading ? <>Loading...</> : filterMenu.map ((item,idx) => {return <MenuCard item={item} key={idx}/>})}
    </div>
    </section>
  )
}

export default Menu