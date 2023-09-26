import React from 'react'

const ChooseUs = () => {
  return (
    <section id="about" className='bg-yellow-400 w-full flex flex-col lg:flex-row'>
      <div className='flex flex-col lg:w-[60%] lg:items-start bg-black lg:px-24 lg:py-4'>
        <h1 className='text-sm lg:text-xl font-poppins flex items-center  justify-center pt-12 pb-4 text-yellow-400'>Why Choose Us ?</h1>
        <h1 className=' text-white text-4xl font-poppins lg:text-8xl lg:text-left text-center pt-2'>Serving <span className='text-yellow-400'>smiles</span>, one plate at a time</h1>
        <p className=' text-white text-sm lg:text-xl tracking-wider px-4 lg:text-left font-mulish text-center py-4'>Our food is a flavor explosion! From scrumptious tacos to creamy pasta, we've got your cravings covered.<span className='text-yellow-400 block font-poppins'> Our service?</span> It's like dining with friends – warm, welcoming, and unforgettable!</p>
        </div>
        <div className='flex flex-col lg:items-center lg:justify-center lg:w-[50%]'>
          <h3 className='text-2xl font-poppins text-center pt-12 pb-4 lg:text-5xl'>Our Services</h3>
          <div className='grid grid-cols-3 px-4 py-2'>
          <div className='text-black w-[150px] px-4 py-8  justify-center flex flex-col items-center hover:bg-black hover:text-yellow-400 duration-300'>
          <h3 className='text-lg font-poppins text-center lg:text-2xl'>Countries</h3>
          <p className='text-xl font-mulish text-center'>+50 </p>
          </div>
          <div className='text-black w-[150px] px-4 py-8  justify-center flex flex-col items-center hover:bg-black hover:text-yellow-400 duration-300'>
          <h3 className='text-lg font-poppins text-center lg:text-2xl'>Cities All over the World</h3>
          <p className='text-xl font-mulish text-center'>+250</p>
          </div>
          <div className='text-black w-[150px] px-4 py-8  justify-center flex flex-col items-center hover:bg-black hover:text-yellow-400 duration-300'>
          <h3 className='text-lg font-poppins text-center lg:text-2xl'>All Customers</h3>
          <p className='text-xl font-mulish text-center'>+250k</p>
          </div>
        </div>
        </div>
    </section>
  )
}

export default ChooseUs