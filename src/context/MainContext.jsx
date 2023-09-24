import axios from "axios";
import { createContext, useEffect, useState } from "react";


const GlobalContext = createContext();


export  function Provider ({children}) {

    const [hamburgerName, setHamburgerName] = useState("");
    const [meat,setMeat] = useState("");
    const [cheese,setCheese] = useState("");
    const [salad,setSalad] = useState("off");
    const [tomato,setTomato] = useState("off");
    const [onion,setOnion] = useState("off");
    const [step,setStep] = useState(0);
    const [menu,setMenu] = useState([]);
    const [loading,setLoading] = useState(false);

    
    const getMenuFromData = async () => {
        const request = await axios.get("http://localhost:3000/menu");
        setMenu(request.data);
    }

    useEffect(() => {
        setLoading(true)
        getMenuFromData();
        setLoading(false);
    },[])

    const sendName = (name) => {
        setHamburgerName(name);
    }

    const sendData = (meat,cheese,salad,tomato,onion) => {
        setMeat(meat);
        setCheese(cheese);
        setSalad(salad);
        setTomato(tomato);
        setOnion(onion);
    }
    const data = {
        hamburgerName,
        meat,
        cheese,
        salad,
        tomato,
        onion,
        step,
        setStep
    };
    return (
        <GlobalContext.Provider value={{data,sendName,sendData,menu,loading}}>
            {children}
        </GlobalContext.Provider>
    )
}



export default GlobalContext;