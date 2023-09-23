import { faShoppingBag,faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const HiddenNavbar = () => {


    const closeHiddenBar = () => {
        const hiddenNavbar = document.querySelector("#hiddenNavbar");
        hiddenNavbar.classList.remove("w-full");
        hiddenNavbar.classList.add("w-0");
    }

  return (
    <div className='w-0 h-screen lg:hidden fixed overflow-hidden bg-yellow-400 z-50 flex flex-col justify-start items-center duration-300' id='hiddenNavbar'>
        
        <div className='w-full flex items-center justify-end p-8'>
            <h1 className='font-extrabold text-2xl cursor-pointer hover:bg-black hover:text-white px-4 py-1 duration-300' onClick={closeHiddenBar}>X</h1>
        </div>
        <div className='flex flex-col space-y-12 items-center justify-center py-2'>
            <a href="/" className='text-2xl font-poppins text-black hover:bg-black hover:text-white duration-300 px-4 py-2'>Home</a>
            <a href="#create" className='text-2xl font-poppins text-black hover:bg-black hover:text-white duration-300 px-4 py-2'>Create</a>
            <a href="" className='text-2xl font-poppins text-black hover:bg-black hover:text-white duration-300 px-4 py-2'>Menu</a>
            <a href="" className='text-2xl font-poppins text-black hover:bg-black hover:text-white duration-300 px-4 py-2'>About</a>
            <a href="" className='text-2xl font-poppins text-black hover:bg-black hover:text-white duration-300 px-4 py-2'>Comments</a>
            <div className='flex justify-center space-x-6 items-center'>
                <FontAwesomeIcon icon={faShoppingBag} className='text-2xl cursor-pointer'></FontAwesomeIcon>
                <button className='text-lg font-poppins uppercase tracking-wide hover:bg-black hover:text-white duration-300 px-4 py-2'>Sign In</button>
                <button className='text-lg bg-black text-white px-4 py-2 font-poppins uppercase hover:bg-white hover:text-black duration-200'>Register</button>
            </div>
        </div>
        
        </div>
  )
}

export default HiddenNavbar