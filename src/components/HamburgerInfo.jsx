import React, { useContext, useState } from 'react'
import GlobalContext from '../context/MainContext'

const HamburgerInfo = () => {

    const {data,sendData} = useContext(GlobalContext);

    const [meat, setMeat] = useState("");
    const [cheese, setCheese] = useState("");
    const [salad, setSalad] = useState("off");
    const [tomato,setTomato] = useState("off");
    const [onion,setOnion] = useState("off");
    const handleNext = () => {
      if (data.step < 3) {
        data.setStep(data.step + 1);
        
        sendData(meat,cheese,salad,tomato,onion);
      }
    }
  return (
    <div>
    <form className='my-4 flex flex-col items-center justify-center space-y-2'>
        <div className='flex items-center justify-evenly space-x-16 lg:space-x-40'>
        <label className='text-lg font-m'>Choose your meat</label>
        <select className='text-lg font-poppins bg-black text-white' value={meat} onChange={e => setMeat(e.target.value)}>
            <option>Meat</option>
            <option>Chichken</option>
            <option>Vegan</option>
        </select>
        </div>
        <div className='flex items-center justify-evenly space-x-12 lg:space-x-36 my-4'>
        <label className='text-lg font-m'>Choose your cheese</label>
        <select className='text-lg font-poppins bg-black text-white' value={cheese} onChange={e => setCheese(e.target.value)}>
            <option>Cheedar</option>
            <option>Moserella</option>
            <option>None</option>
        </select>
        </div>
        <div className='flex space-x-4 py-4'>
            <div className='flex space-x-2'>
            <label className='test-lg font-mulish'>Salad</label>
            <input type='checkbox' className='w-6' onClick={e=> setSalad(e.target.value)}/>
            </div>
            <div className='flex space-x-2'>
            <label className='test-lg font-mulish' >Tomato</label>
            <input type='checkbox' className='w-6'onClick={e=> setTomato(e.target.value)}/>
            </div>
            <div className='flex space-x-2'>
            <label className='test-lg font-mulish'>Onion</label>
            <input type='checkbox' className='w-6'  onClick={e=> setOnion(e.target.value)}/>
            </div>
        </div>
    </form>
    <div className='w-full my-4 flex items-end justify-center lg:justify-end'>
    <button className='px-6 py-2 bg-black text-white hover:bg-white hover:text-black duration-300 uppercase font-poppins'
            onClick={handleNext} 
            >Continue</button>
            </div>
    </div>
  )
}

export default HamburgerInfo