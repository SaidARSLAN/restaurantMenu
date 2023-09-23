import React from 'react'

const OpenShopBox = () => {
  return (
    <div className='bg-yellow-400  h-0 overflow-auto flex absolute z-50 top-[100.3999px] w-[300px] shadow-lg shadow-neutral-800 duration-300' id='shopbox'>
        <div className='flex flex-col w-full h-full'>
        <div className='relative h-full flex w-full items-end justify-center py-2'>
        <button className='bg-black text-white px-6 py-2 text-lg font-poppins w-[200px]  uppercase hover:bg-white hover:text-black duration-300'>Complete</button>
        </div>
    </div>
    </div>
  )
}

export default OpenShopBox