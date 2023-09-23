import React from 'react'
import { navLinks } from '../contains'
import Link from './Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {


  const openHamburgerSection = () => {
    const hiddenNavbar = document.querySelector("#hiddenNavbar");
    hiddenNavbar.classList.remove("w-0");
    hiddenNavbar.classList.add("w-full");
  }

  return (
    <header className='flex w-full justify-between lg:px-16 px-8  bg-yellow-400 h-[120px] items-center'>
        <h3 className='text-3xl font-poppins tracking-wider cursor-pointer w-1/3'>
            CocaFood
        </h3>
        <nav className='hidden lg:flex lg:w-1/3 w-full justify-evenly'>
            {navLinks.map((link) => {
                    return <Link link={link}/>
            })}
        </nav>
        <div className='grid grid-cols-1 gap-1 cursor-pointer lg:hidden' onClick={openHamburgerSection}>
            <div className='w-[25px] h-[3px] bg-black'></div>
            <div className='w-[25px] h-[3px] bg-black'></div>
            <div className='w-[25px] h-[3px] bg-black'></div>
        </div>
        <div className='hidden lg:flex justify-center w-1/3 space-x-6 items-center'>
                <FontAwesomeIcon icon={faShoppingBag} className='text-2xl cursor-pointer'></FontAwesomeIcon>
                <button className='text-lg font-poppins uppercase tracking-wide '>Sign In</button>
                <button className='text-lg bg-black text-white px-4 py-2 font-poppins uppercase hover:bg-white hover:text-black duration-200'>Register</button>
            </div>
    </header>
  )
}

export default Nav