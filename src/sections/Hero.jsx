import React, { useEffect, useState } from 'react'
import { Hamburger,Soup,Meat } from '../contains'

const Hero = () => {

    const [number,setNumber] = useState(0);

    const [image, setImage] = useState(Hamburger);
    const foodImageLists = [Hamburger,Soup,Meat]
    const foodNameLists = ["Hamburger","Soup","Meat"]
    const foodExplainLists = [
        "Sink your teeth into our mouthwatering hamburgers! Our sizzling beef patties, fresh toppings, and soft buns create burger perfection.",
        "Savor the warmth and flavor of our exquisite soups, crafted with care and a dash of culinary magic. Soup that nourishes the soul!",
        "Indulge in the finest cuts of meat, tender and succulent. Our selection is a carnivore's paradise, prepared to perfection. Meat-lover's delight!"

]
const [name,setName] = useState(foodNameLists[0]);
const [explain,setExplain] = useState(foodExplainLists[0]);

    
    setTimeout(() => {
        if(number > 1) {
            setNumber(0);
        }
        else {
            setNumber(number + 1);
        }
    },3000);

    useEffect(() => {
        setImage(foodImageLists[number]);
        setName(foodNameLists[number]);
        setExplain(foodExplainLists[number]);
    },[number])


  return (
    <div className='relative'>
        <img src={image} className='text-xl object-cover w-[1920px] h-[620px] brightness-25'/>
        <div className='absolute bottom-24 left-[3%] lg:left-[3%] text-white flex flex-col space-y-4 px-4'>
            <h1 className='font-poppins text-4xl text-white lg:text-6xl'>{name}</h1>
            <p className='text-sm font-mulish text-white lg:text-xl lg:w-2/3'>{explain}</p>
            <button className='text-lg bg-yellow-400 w-[120px] text-black px-6 py-2 font-poppins uppercase hover:bg-white hover:text-black duration-200'>Order</button>
        
        </div>

    </div>
  )
}

export default Hero