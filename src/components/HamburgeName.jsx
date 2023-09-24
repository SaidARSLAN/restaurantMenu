import React, { useContext, useRef, useState} from 'react'
import GlobalContext from '../context/MainContext'

const HamburgeName = () => {


    const inputArea = useRef();
    const {data,sendName} = useContext(GlobalContext)
    const [name, setName] = useState("");
    const handleNext = (event) => {
      event.preventDefault();
      if (data.step < 3 && name !== "") {
        data.setStep(data.step + 1);
        sendName(name);
      }
      if (name === ""){
          const hiddenDiv = document.querySelector("#hiddenDiv");
          hiddenDiv.classList.remove("hidden");
          hiddenDiv.classList.add("inline-block");
          inputArea.current.classList.add("border-red-500");
      }
    }

  return (
    <form className='w-2/3 flex lg:items-start lg:justify-start flex-col items-center justify-center'>
          <input className='px-4 py-2 w-full mt-12 font-poppins border-2 border-black bg-black text-white' placeholder='Hamburger Name' 
          value={name} onChange={e => {setName(e.target.value)}} ref={inputArea}></input>
          <div className='text-red-600 text-sm font-poppins hidden' id='hiddenDiv'>You cannot continue!</div>
          <div className='w-full my-4 flex items-end justify-center lg:justify-end'>
          <button className='px-6 py-2 bg-black text-white hover:bg-white hover:text-black duration-300 uppercase font-poppins'
            onClick={handleNext} 
            >Continue</button>
            </div>
        </form>
  )
}

export default HamburgeName