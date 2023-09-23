import React, { useState } from 'react'

const HamburgeName = () => {


    const [hamburgerName, setHamburgerName] = useState("");

  return (
    <form className='w-2/3 flex lg:items-start lg:justify-start flex-col items-center justify-center'>
          <input className='px-4 py-2 w-full mt-12 font-poppins border-2 border-black bg-black text-white' placeholder='Hamburger Name' 
          value={hamburgerName} onChange={e => {setHamburgerName(e.target.value)}}></input>
        </form>
  )
}

export default HamburgeName