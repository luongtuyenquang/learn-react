import { useEffect, useState } from "react"

export default function UseEffect(){

    // useEffect: Thay đổi thanh tiêu đề trên trang web khi nhập dữ liệu ở input
   const [title, setTitle] = useState('')
    
   useEffect(() => {
        document.title = title
   })

    return (
        <div className='App'>
            <input type='text' placeholder='Nhập title' onChange={e => setTitle(e.target.value)} />
        </div>
    )
} 