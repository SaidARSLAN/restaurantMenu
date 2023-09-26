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
    const [total,setTotal] = useState(0);
    const [shoppedList,setShoppedList] = useState([]);
    const [boughtName,setBoughtName] = useState("");
    const [boughtPrice,setBoughtPrice] = useState(0);

    const [stepMenu, setStepMenu] = useState(0);
    const titles = ["Breakfast","Meal","Pizza","Salad","Sweet","Drink"];
    const [filterMenu, setFilterMenu] = useState([]);
    
    const handlNext = () => {
        if (stepMenu < titles.length - 1) {
          setStepMenu(currStep => currStep + 1);
        }
      }
      const handleBack = () => {
        if (stepMenu > 0) {
          setStepMenu(currStep => currStep - 1);
        }
      }

    const getMenuFromData = async () => {
        const request = await axios.get("http://localhost:3000/menu");
        setMenu(request.data);
    }
    
      const createFilterMenu = () => {
        const afterFilteredList = menu.filter((item) => {
            return item.type === titles[stepMenu];
        })
        setFilterMenu(afterFilteredList);
      }

      useEffect(() => {
        const afterFilteredMenu = menu.filter((item) => {
          return item.type === titles[stepMenu];
        })
        setFilterMenu(afterFilteredMenu);
    },[stepMenu])

    useEffect(() => {
        try {
            setLoading(true)
            getMenuFromData();        
            setLoading(false);

        }
        catch  {
            console.log("err")
        }
    },[])

    useEffect(() => {
        createFilterMenu();
    },[menu]);

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

    const sendBuyItems = (name,price) => {
          setShoppedList([...shoppedList,{"name":name,"price":price}])
          setBoughtName(name),
          setBoughtPrice(price);
    }
    useEffect(() => {
      setTotal(total + boughtPrice);
    },[boughtPrice])

    return (
        <GlobalContext.Provider value={{data,sendName,sendData,menu,loading,handleBack,handlNext,stepMenu,filterMenu,sendBuyItems,boughtName,boughtPrice,total,shoppedList,setShoppedList,setTotal}}>
            {children}
        </GlobalContext.Provider>
    )
}



export default GlobalContext;