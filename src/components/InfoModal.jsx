import React, { useContext, useRef } from 'react'
import GlobalContext from '../context/MainContext'

const InfoModal = () => {

    const {data,modal}= useContext(GlobalContext);
    const handleClose = () => {
        modal.current.classList.remove("lg:flex");
        modal.current.classList.add("lg:hidden");
    }
  return (
    <div className='fixed hidden lg:hidden lg:top-[18%] lg:left-[30%] w-[600px] h-3/5 bg-dark space-y-2 lg:flex-col lg:items-start lg:px-12 lg:justify-center' ref={modal} id='modal'>
        <div className='absolute top-2 right-4 text-3xl font-poppins text-white cursor-pointer' onClick={handleClose}>X</div>
        <div className='text-3xl font-poppins text-white'>{data.name}</div>
        <div className='text-base font-mulish text-white'>{data.ingredients}</div>
        <div className='text-sm font-poppins text-white'>{data.type}</div>    
    </div>
  )
}

export default InfoModal