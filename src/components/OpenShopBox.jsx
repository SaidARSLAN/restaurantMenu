import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/MainContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const OpenShopBox = () => {
  const {total,shoppedList,setTotal,setShoppedList} = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  
  const handleComplete = () => {
    if (total !== 0 ) {
      setLoading(true)
    }
  }
  useEffect(() => {
    async function fetchData() {
        await delay(4000); // Wait for 4 seconds
        setLoading(false); // Set loading to false after the delay
        setTotal(0);
        setShoppedList([])
    }

    fetchData();
}, [loading]);
  return (
    <div className='bg-yellow-400  h-0 overflow-auto flex absolute top-24 right-4 z-50 lg:right-36 lg:top-[100.3999px] lg:w-[250px] shadow-lg shadow-black duration-300' id='shopbox'>
            {loading ? <div className='flex flex-col w-full h-full px-2 py-4 space-y-2 items-center justify-center'>
            <FontAwesomeIcon icon={faSpinner} className='animate-spin w-1/3 lg:w-2/3 my-4 h-10'></FontAwesomeIcon>
            </div> : <div className='flex flex-col w-full h-full px-2 py-4 space-y-2'>
          {shoppedList.map((item,idx) => {
            return (<div key={idx} className='flex w-full items-center  justify-between px-2 py-4 bg-black text-yellow-400'>
            <h3 className='text-xs font-poppins'>{item.name}</h3>
            <p className='text-xs font-mulish'>{item.price}</p>
        </div>)
          })}
        
        <div className='relative h-full flex w-full px-4 lg:px-0 items-end justify-center py-2'>
        <button className='bg-black text-white px-6 py-2 text-lg font-poppins w-[200px]  uppercase hover:bg-white hover:text-black duration-300' onClick={handleComplete}>Complete {total}$</button>
        </div>
    </div>}

        
    </div>
  )
}

export default OpenShopBox