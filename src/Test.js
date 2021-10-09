// import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';
import { CouterContext } from './context/MyGlobalContext';
import { Couter } from './hooks/Couter';


function Test(){
    const [number, setNumber] = useState(0)
    function increaseNumber(){
        setNumber(number + 1)
    }

    return (
        <div className='wrapper'>
            <CouterContext.Provider value={{number, increaseNumber}}>
            <Couter />
            </CouterContext.Provider>
        </div>
    )
}

export default Test;
