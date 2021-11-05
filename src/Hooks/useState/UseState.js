import { useState } from "react"

export default function UseState(){

    // Ví dụ: click để nhận tiền ngẫu nhiên
   const gifts = [
       '10.000 VNĐ',
       '20.000 VNĐ',
       '50.000 VNĐ',
       '100.000 VNĐ',
       '200.000 VNĐ',
       '500.000 VNĐ',
   ]

   const [gift, setGift] = useState()

   function handleClick(){
        const index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index])
   }

    return (
        <div className='App'>
            <h3>{gift ? gift : 'Vui lòng click vào nhận quà'}</h3>
            <button onClick={handleClick}>Nhận quà</button>
        </div>
    )
} 