import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <div className='text-white  bg-black lg:h-96 h-60 flex py-12 lg:items-center lg:justify-around lg:px-12 justify-evenly'>
        <div>
        <h3 className='text-3xl lg:text-5xl font-poppins tracking-wider cursor-pointer w-1/3 flex space-x-4'>
            <FontAwesomeIcon icon={faHamburger} className='text-yellow-400'></FontAwesomeIcon><div className='flex'><span>Coca</span><span className='text-yellow-400'>Food</span></div>
        </h3>
        <div className='flex flex-col py-4'>
            <h3 className='text-sm font-poppins lg:text-xl'>Contact Informations</h3>
            <p className='text-sm font-mulish lg:text-lg'>123 Elm Street Maplewood, CA 98765</p>
            <p className='text-sm font-mulish lg:text-lg'>+905678912345</p>
            <p className='text-sm font-mulish my-4 text-center lg:text-left'>Copyright © 2023. All rights are reserved</p>
        </div>
        </div>
        <div className='flex flex-col items-center'>
        <h3 className='font-poppins text-lg text-gray-300 lg:text-3xl lg:hidden'>Site Links</h3>
        <ul className='lg:flex  lg:space-x-12 lg:flex-row'>
        <li className='text-xs font-mulish lg:text-2xl lg:font-poppins text-gray-500 hover:text-white duration-300'><a href="#home">Home</a></li>
        <li className='text-xs font-mulish lg:text-2xl lg:font-poppins text-gray-500 hover:text-white duration-300'><a href="#create">Create</a></li>
        <li className='text-xs font-mulish lg:text-2xl lg:font-poppins text-gray-500 hover:text-white duration-300'><a href="#menu">Menu</a></li>
        <li className='text-xs font-mulish lg:text-2xl lg:font-poppins text-gray-500 hover:text-white duration-300'><a href="#about">About</a></li>
        <li className='text-xs font-mulish lg:text-2xl lg:font-poppins text-gray-500 hover:text-white duration-300'><a href="#about">Reviews</a></li>
        </ul>
        </div>
        </div>
  )
}

export default Footer