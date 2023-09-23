import { createContext, useState } from "react";


const GlobalContext = createContext();


export  function Provider ({children}) {

    const [hamburgerName, setHamburgerName] = useState("");
    const [meat,setMeat] = useState("");
    const [cheese,setCheese] = useState("");
    const [salad,setSalad] = useState("off");
    const [tomato,setTomato] = useState("off");
    const [onion,setOnion] = useState("off");
    const [step,setStep] = useState(0);

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
        <GlobalContext.Provider value={{data,sendName,sendData}}>
            {children}
        </GlobalContext.Provider>
    )
}



export default GlobalContext;