import React from 'react'
import { HamburgerNext } from '../contains'

const Create = () => {
  return (
    <div className='flex h-[900px] flex-col w-full bg-yellow-400'>
      <div className='w-full flex items-center justify-center mt-12'>
        <h1 className='text-5xl text-center font-poppins leading-20'>Create Your Own Hamburger From Zero</h1>
      </div>
      <div className='w-full my-9 flex items-center justify-center'>
        <img src={HamburgerNext} />
      </div>
      <div className='w-full flex items-center justify-center'>
        <form className='flex flex-col w-full items-center'>
          <input className='border-2 border-black w-2/3 px-4 py-2 font-mulish text-lg' placeholder='Name and Surname'></input>
          <label>Which meat do you prefer?</label>
          <select>
            <option>Meat</option>
            <option>Chicken</option>
            <option>Vegan</option>
          </select>
          <div className='flex space-x-4'>
          <div className='flex space-x-2'>
          <input type='checkbox'></input>
          <label>Lettuce</label>
          </div>
          <div className='flex space-x-2'>
          <input type='checkbox'></input>
          <label>Salad</label>
          </div>
          <div className='flex space-x-2'>
          <input type='checkbox'></input>
          <label>Tomato</label>
          </div>
          </div>
          <label>Which cheese do you prefer?</label>
          <select>
            <option>Cheedar</option>
            <option>Mozerella</option>
            <option>None</option>
          </select>
          <div className='flex space-x-2'>
          <input type='checkbox'></input>
          <label>You want to onion?</label>
          </div>
          <label>Which bread do you prefer?</label>
          <select>
            <option>Normal</option>
            <option>Big</option>
            <option>Small</option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default Create