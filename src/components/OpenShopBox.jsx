import React from 'react'

const OpenShopBox = () => {
  return (
    <div className='bg-yellow-400  h-0 overflow-auto   absolute z-50 top-24 w-[252px] duration-300' id='shopbox'>
        <div className='relative h-full flex w-full items-end justify-center'>
        <button className='bg-black text-white px-6 py-2 text-lg font-poppins w-[250px] absolute bottom-2 uppercase hover:bg-white hover:text-black duration-300'>Complete</button>
        </div>
    </div>
  )
}

export default OpenShopBox