import { useEffect, useState } from "react"

export default function UseEffect(){

    // useEffect - Example: Preview Avatar
    const [show, setShow] = useState(false)
    const [avatar, setAvatar] = useState()

    const handleClick = () => {
        setShow(!show)
    }

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        const img = URL.createObjectURL(file)
        setAvatar(img);
    }

    useEffect(() => {
        
        return () => {
            URL.revokeObjectURL(avatar)
        }
    }, [avatar])

    return (
        <div className='App'>
            <button onClick={handleClick}>{show === false ? 'Hiện' : 'Ẩn'}</button>
            {show && <input type='file' onChange={handlePreviewAvatar} />}
            <img src={avatar} width='300px' alt={''}/>
        </div>
    )
} 