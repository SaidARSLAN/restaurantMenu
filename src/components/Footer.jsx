import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <div className='text-black  bg-yellow-400 lg:h-96 h-60 flex items-center'>
        <h3 className='text-3xl font-poppins tracking-wider cursor-pointer w-1/3 flex space-x-4'>
            <FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon><div className='flex'><span>Coca</span><span>Food</span></div>
        </h3>
        </div>
  )
}

export default Footer