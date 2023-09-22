import React, { useContext } from 'react'
import { foods, navbarLinks } from '../contents'
import GlobalContext from '../context/MainContext';

const FilterNavbar = () => {

    const {sendFilteredData} = useContext(GlobalContext);
    const handleFilterClick = (event) => {
        sendFilteredData(event.target.textContent);
    }

  return (
    <nav className='flex w-full items-center justify-evenly lg:flex-col lg:items-start lg:space-y-4 '>
        {navbarLinks.map((link,idx) => {
            return <a key={idx} className='text-xs bg-lemon py-1  text-dark cursor-pointer font-poppins px-[4px] 
            
            lg:px-12 lg:py-6 lg:text-center lg:w-[250px] lg:hover:bg-gray lg:duration-200 lg:hover:text-white lg:text-xl' onClick={handleFilterClick}
        
            >{link}</a>
        })}
    </nav>
  )
}

export default FilterNavbar