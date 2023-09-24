import React, { useContext, useState } from 'react'
import { HamburgerNext } from '../contains'
import HamburgeName from '../components/HamburgeName';
import HamburgerInfo from '../components/HamburgerInfo';
import HamburgerConfirm from '../components/HamburgerConfirm';
import SendHamburger from '../components/SendHamburger';
import GlobalContext from '../context/MainContext';

const Create = () => {

  const {data} = useContext(GlobalContext)
  

  return (
    <section id="create" className='flex h-[900px] flex-col w-full bg-yellow-400 lg:h-[1050px]'>
      <div className='w-full flex items-center justify-center mt-28 lg:mt-52 bg-black py-8 lg:py-12'>
        <h1 className='text-5xl text-center font-poppins leading-20 text-white lg:text-9xl'>Create Your Own Hamburger From Zero</h1>
      </div>
      <div className='flex flex-col lg:flex-row-reverse'>
      <div className='w-full my-9 flex items-center justify-center lg:mt-24'>
        <img src={HamburgerNext} className='lg:w-[1440px]'/>
      </div>
      <div className='flex lg:items-start flex-col w-full lg:justify-center justify-center items-center  lg:px-24 lg:py-12'>
      <h1 className='font-poppins text-3xl  lg:text-5xl   text-center lg:text-left'>
        {data.step === 0 ? "Choose Name" : data.step === 1 ? "Choose your ingredients" : data.step === 2 ? "Confirm Everything" : <></>}
      </h1>
        {data.step === 0 ? <HamburgeName /> : data.step === 1 ? <HamburgerInfo /> : data.step === 2 ? <HamburgerConfirm />: data.step === 3 ? <SendHamburger />:<></>}
    
      </div>
      </div>
    </section>
  )
}

export default Create