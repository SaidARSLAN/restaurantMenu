import React from 'react'

const OpenShopBox = () => {
  return (
    <div className='bg-yellow-400  h-0 overflow-auto flex absolute top-24 right-4 z-50 lg:right-36 lg:top-[100.3999px] lg:w-[250px] shadow-lg shadow-black duration-300' id='shopbox'>
        <div className='flex flex-col w-full h-full border-4 border-black'>
        <div className='relative h-full flex w-full px-4 lg:px-0 items-end justify-center py-2'>
        <button className='bg-black text-white px-6 py-2 text-lg font-poppins w-[200px]  uppercase hover:bg-white hover:text-black duration-300'>Complete</button>
        </div>
    </div>
    </div>
  )
}

export default OpenShopBox