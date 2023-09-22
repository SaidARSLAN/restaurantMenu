import React, { useContext } from 'react'
import { foods, navbarLinks } from '../contents'
import GlobalContext from '../context/MainContext';

const FilterNavbar = () => {

    const {sendFilteredData} = useContext(GlobalContext);
    const handleFilterClick = (event) => {
        sendFilteredData(event.target.textContent);
    }

  return (
    <nav className='flex w-full items-center justify-evenly'>
        {navbarLinks.map((link,idx) => {
            return <a key={idx} className='text-xs bg-yellow-200 py-1 font-bold text-pink-900 cursor-pointer font-mono px-[4px]' onClick={handleFilterClick}>{link}</a>
        })}
    </nav>
  )
}

export default FilterNavbar