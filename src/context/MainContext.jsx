import { createContext, useEffect, useState } from "react";
import { foods } from "../contents";

const GlobalContext = createContext();


export function Provider ({children}) {

    const [filterFoods,setFilterFoods] = useState([]);


    const sendFilteredData = (filteredType) => {
        const tempFilterFoods = foods.filter((food) => {
            return (food.type === filteredType)
        })
        setFilterFoods(tempFilterFoods);
    }

    return (
        <GlobalContext.Provider value={{sendFilteredData,filterFoods}}>
            {children}
        </GlobalContext.Provider>
    )
}




export default GlobalContext;