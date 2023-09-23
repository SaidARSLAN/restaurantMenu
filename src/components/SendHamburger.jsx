import React from 'react'
import { lunchBox } from '../contains'

const SendHamburger = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center'>
        <h1 className='text-lg font-bold'>Preparing...</h1>
        <img src={lunchBox} className='w-40' />
    </div>
  )
}

export default SendHamburger