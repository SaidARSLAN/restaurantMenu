import React, { useState } from 'react'
import { HamburgerNext } from '../contains'
import HamburgeName from '../components/HamburgeName';
import HamburgerInfo from '../components/HamburgerInfo';
import HamburgerConfirm from '../components/HamburgerConfirm';
import SendHamburger from '../components/SendHamburger';

const Create = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  return (
    <div className='flex h-[900px] flex-col w-full bg-yellow-400 lg:h-[1200px]'>
      <div className='w-full flex items-center justify-center mt-28 lg:mt-52 bg-black py-8 lg:py-12'>
        <h1 className='text-5xl text-center font-poppins leading-20 text-white lg:text-9xl'>Create Your Own Hamburger From Zero</h1>
      </div>
      <div className='flex flex-col lg:flex-row-reverse'>
      <div className='w-full my-9 flex items-center justify-center lg:mt-24'>
        <img src={HamburgerNext} className='lg:w-[1440px]'/>
      </div>
      <div className='flex lg:items-start flex-col w-full lg:justify-center justify-center items-center  lg:px-24 lg:py-12'>
      <h1 className='font-poppins text-xl lg:text-5xl   text-center lg:text-left'>
        {step === 0 ? "Choose Name" : step === 1 ? "Choose your ingredients" : step === 2 ? "Confirm Everything" : step === 3 ? "Added Box": <></>}
      </h1>
        {step === 0 ? <HamburgeName /> : step === 1 ? <HamburgerInfo /> : step === 2 ? <HamburgerConfirm />: step === 3 ? <SendHamburger />:<></>}
        <div className= {step === 3 ? 'hidden' : 'mt-2 w-2/3 flex justify-end'}>
            <button className='px-6 py-2 bg-black text-white hover:bg-white hover:text-black duration-300 uppercase font-poppins'
            onClick={handleNext} 
            >{step === 2 ? "Send" : "Continue"}</button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Create