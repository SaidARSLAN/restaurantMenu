import React from 'react'
import { personfour, personone, personthree, persontwo } from '../contains'

const Comments = () => {
  return (
    <div>
      <h1 className='text-center text-2xl font-poppins py-4'>Customer's Reviews</h1>
      <div className='grid grid-cols-1 px-4 py-4 space-y-4'>
        <div className='flex border-[1px]   py-2 px-8   shadow-xl shadow-slate-700'>
          <div className='text-left flex flex-col justify-center'>
            <h3 className='font-poppins text-base text-yellow-600'>Emma Hayes</h3>
            <p className='font-mulish text-xs w-[250px] font-bold'>The restaurant's ambiance was exquisite, creating a delightful atmosphere for a memorable dining experience, making it a must-visit spot.</p>
            </div>
            <div className='flex items-center justify-center'>
                <img src={personone} />
            </div>
            </div>
            <div className='flex border-[1px] py-2 px-8  shadow-xl shadow-slate-700'>
          <div className='text-left flex flex-col justify-center'>
            <h3 className='font-poppins text-base text-yellow-600'>Olivia Mitchell</h3>
            <p className='font-mulish text-xs w-[250px] font-bold'>The menu offered a diverse selection of mouthwatering dishes, each prepared with skill and creativity, leaving us impressed.</p>
            </div>
            <div className='flex items-center justify-center'>
                <img src={personthree} />
            </div>
            </div>
            <div className='flex border-[1px]  py-2 px-8  shadow-xl shadow-slate-700'>
          <div className='text-left flex flex-col justify-center'>
            <h3 className='font-poppins text-base text-yellow-600'>Sophia Reynolds</h3>
            <p className='font-mulish text-xs w-[250px] font-bold'>The attentive staff provided excellent service, ensuring that our dining needs were met promptly, adding to our overall enjoyment.</p>
            </div>
            <div className='flex items-center justify-center'>
                <img src={persontwo} />
            </div>
            </div>
            <div className='flex border-[1px]  py-2 px-8  shadow-xl shadow-slate-700'>
          <div className='text-left flex flex-col justify-center'>
            <h3 className='font-poppins text-base text-yellow-600'>Isabella Anderson</h3>
            <p className='font-mulish text-xs w-[250px] font-bold'>Despite the high quality of the food and service, we found the prices to be reasonable, making it a fantastic value.</p>
            </div>
            <div className='flex items-center justify-center'>
                <img src={personfour} />
            </div>
            </div>
      </div>
    </div>
  )
}

export default Comments