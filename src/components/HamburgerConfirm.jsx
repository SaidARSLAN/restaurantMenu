import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext'

const HamburgerConfirm = () => {
    const {data} =  useContext(GlobalContext)
    const handleNext = () => {
      if (data.step < 3) {
        data.setStep(data.step + 1);
        
      }
      
    }
  return (
    <div className='my-2 flex flex-col'>
        <div className='flex space-x-8 my-2'>
        <h1 className='text-sm font-poppins'>{data.hamburgerName}</h1>
        <p className='text-sm font-mulish'>{data.meat}</p>
        <p className='text-sm font-mulish'>{data.cheese}</p>
        <p className='text-sm font-mulish'>{data.salad}</p>
        <p className='text-sm font-mulish'>{data.tomato}</p>
        <p className='text-sm font-mulish'>{data.onion}</p>
        </div>
        <form className='flex space-x-2 items-center justify-center'>
            <input type='checkbox' className='h-4 w-8'></input>
            <label className='text-lg font-mulish'>I confirmed everything</label>
            
        </form>
        <div className='w-full my-4 flex items-end justify-center lg:justify-end'>
        <button className='px-6 py-2 bg-black text-white hover:bg-white hover:text-black duration-300 uppercase font-poppins'
            onClick={handleNext} 
            >Send</button>
            </div>
    </div>
  )
}

export default HamburgerConfirm