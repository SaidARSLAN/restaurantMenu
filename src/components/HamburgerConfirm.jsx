import React from 'react'

const HamburgerConfirm = () => {
  return (
    <div className='my-2 flex flex-col'>
        <div className='flex space-x-8 my-2'>
        <h1 className='text-sm font-poppins'>Hamburger Name</h1>
        <p className='text-sm font-mulish'>Meat Type</p>
        <p className='text-sm font-mulish'>Cheese Type</p>
        <p className='text-sm font-mulish'>Preferencies</p>
        </div>
        <form className='flex space-x-2 items-center justify-center'>
            <input type='checkbox' className='h-4 w-8'></input>
            <label className='text-lg font-mulish'>I confirmed everything</label>
        </form>
    </div>
  )
}

export default HamburgerConfirm