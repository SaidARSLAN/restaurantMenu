import { createContext, useState,useRef } from "react";
import { foods } from "../contents";

const GlobalContext = createContext();



export function Provider ({children}) {

    const [img, setImg] = useState("")
const [name, setName] = useState("")
const [ingredients, setIngredients] = useState([])
const [type, setType] = useState("")
    const [filterFoods,setFilterFoods] = useState([]);


    const sendFilteredData = (filteredType) => {
        const tempFilterFoods = foods.filter((food) => {
            return (food.type === filteredType)
        })
        setFilterFoods(tempFilterFoods);
    }

    const getMoreInfo = (name,ingredients,type,img) => {
        setImg(img);
        setName(name);
        setIngredients(ingredients);
        setType(type);
    }
    const data = {
        img,
        name,
        ingredients,
        type
    }
    const modal = useRef();
    return (
        <GlobalContext.Provider value={{sendFilteredData,filterFoods,getMoreInfo,data,modal}}>
            {children}
        </GlobalContext.Provider>
    )
}




export default GlobalContext;