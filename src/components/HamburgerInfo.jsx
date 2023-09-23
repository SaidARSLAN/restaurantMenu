import React from 'react'

const HamburgerInfo = () => {
  return (
    <form className='my-4 flex flex-col items-center justify-center space-y-2'>
        <div className='flex items-center justify-evenly space-x-16 lg:space-x-40'>
        <label className='text-lg font-m'>Choose your meat</label>
        <select className='text-lg font-poppins bg-black text-white'>
            <option>Meat</option>
            <option>Chichken</option>
            <option>Vegan</option>
        </select>
        </div>
        <div className='flex items-center justify-evenly space-x-12 lg:space-x-36 my-4'>
        <label className='text-lg font-m'>Choose your cheese</label>
        <select className='text-lg font-poppins bg-black text-white'>
            <option>Cheedar</option>
            <option>Moserella</option>
            <option>None</option>
        </select>
        </div>
        <div className='flex space-x-4 my-8'>
            <div className='flex space-x-2'>
            <label className='test-lg font-mulish'>Salad</label>
            <input type='checkbox' />
            </div>
            <div className='flex space-x-2'>
            <label className='test-lg font-mulish'>Tomato</label>
            <input type='checkbox' />
            </div>
            <div className='flex space-x-2'>
            <label className='test-lg font-mulish'>Onion</label>
            <input type='checkbox' />
            </div>
        </div>
    </form>
  )
}

export default HamburgerInfo