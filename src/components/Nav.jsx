import React from 'react'
import { navLinks } from '../contains'
import Link from './Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import OpenShopBox from './OpenShopBox'

const Nav = () => {


  const openHamburgerSection = () => {
    const hiddenNavbar = document.querySelector("#hiddenNavbar");
    hiddenNavbar.classList.remove("w-0");
    hiddenNavbar.classList.add("w-full");
  }

  const openShopBox = () => {
    const shopbox = document.querySelector("#shopbox");
    if (shopbox.classList.contains("h-0")) {
    shopbox.classList.remove("h-0");
    shopbox.classList.add("h-[250px]");
    }
    else {
      shopbox.classList.add("h-0");
    shopbox.classList.remove("h-[250px]");
    }
  }

  return (
    <header className='flex fixed lg:static z-10 lg:z-0 w-full shadow-xl justify-between lg:px-16 px-8  bg-yellow-400 h-[100px] items-center'>
        <h3 className='text-3xl font-poppins tracking-wider cursor-pointer w-1/3 flex space-x-4'>
            <FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon><div className='flex'><span>Coca</span><span>Food</span></div>
        </h3>
        <nav className='hidden lg:flex lg:w-1/3 w-full justify-evenly'>
            {navLinks.map((link,key) => {
                    return <Link link={link} key={key}/>
            })}
        </nav>
        <div className='flex space-x-8'>
        <FontAwesomeIcon icon={faShoppingBag} className='text-2xl cursor-pointer hover:text-gray-600 duration-300 lg:hidden' onClick={openShopBox}></FontAwesomeIcon>
        <OpenShopBox />
        <div className='grid grid-cols-1 gap-1 cursor-pointer lg:hidden' onClick={openHamburgerSection}>
            <div className='w-[25px] h-[3px] bg-black'></div>
            <div className='w-[25px] h-[3px] bg-black'></div>
            <div className='w-[25px] h-[3px] bg-black'></div>
        </div>
        </div>
        <div className='hidden lg:flex justify-center w-1/3 space-x-6 items-center'>
          <div className='flex flex-col'>
                <FontAwesomeIcon icon={faShoppingBag} className='text-2xl cursor-pointer hover:text-gray-600 duration-300' onClick={openShopBox}></FontAwesomeIcon>
                <OpenShopBox />
          </div>
                <button className='text-lg font-poppins uppercase tracking-wide hover:text-gray-600 duration-300'>Sign In</button>
                <button className='text-lg bg-black text-white px-4 py-2 font-poppins uppercase hover:bg-white hover:text-black duration-300'>Register</button>
            </div>
    </header>
  )
}

export default Nav