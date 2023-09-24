import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/MainContext'
import MenuCard from '../components/MenuCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faSpinner } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
  const {menu,loading} = useContext(GlobalContext)
  const [step, setStep] = useState(0);
  const menuTitleList =  ["Breakfast","Meal","Pizza","Salad","Sweet","Drink"]
  const [title, setTitle] = useState("");
  const [filteredMenu, setFilteredMenu] = useState(menu);
  const handleNext = () => {
    if (step < menuTitleList.length - 1) {
      setStep(step + 1);
    }
    else {
      setStep(0);
    }
  }

  useEffect(() => {
    setTitle(menuTitleList[step]);
    const AfterfilterMenu = menu.filter((item) => {
        return (item.type === title)
    })
    setFilteredMenu(AfterfilterMenu);
    console.log(filteredMenu);
  },[step])

  return (
    <div className='flex flex-col text-center py-4 w-full items-center justify-center'>
      <div className='flex space-x-4 my-8 items-center'>
        <button className='text-2xl text-gray-400 hover:text-black duration-200'><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></button>
        <h1 className='text-lg font-poppins text-black cursor-default w-24'>{filteredMenu.length === 0 ? "Mix" : title}</h1>
        <button className='text-2xl text-gray-400 hover:text-black duration-200' onClick={handleNext}><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></button>
      </div>
      {loading ? <FontAwesomeIcon icon={faSpinner} className='animate-spin'></FontAwesomeIcon> :
      filteredMenu.length === 0 ? menu.map((item) => {return (<MenuCard item={item}/>)}) : filteredMenu.map((item) => {return <MenuCard item={item}/>})
      }
    </div>
  )
}

export default Menu