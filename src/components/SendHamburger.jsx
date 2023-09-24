import React, { useEffect, useState } from 'react';
import { cooking } from '../contains';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faRing, faSpinner, faTruckLoading } from '@fortawesome/free-solid-svg-icons';

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const SendHamburger = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            await delay(4000); // Wait for 4 seconds
            setLoading(false); // Set loading to false after the delay
        }

        fetchData();
    }, []);

    return (
        <div className='flex flex-col w-full items-center lg:items-start justify-center'>
            {loading ? (
                <FontAwesomeIcon icon={faSpinner} className='animate-spin w-1/3 lg:w-2/3 my-4 h-10'></FontAwesomeIcon>
            ) : (
                <div className='flex w-full items-center flex-col justify-center'>
                <h1 className='font-poppins text-4xl lg:text-5xl   text-center lg:text-left'>Added Box</h1>
                <img src={cooking} className='w-1/3 lg:w-2/3 my-4 h-[400px]' alt='Cooking' />
                </div>
            )}
        </div>
    );
};

export default SendHamburger;
