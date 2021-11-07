import { useEffect, useState } from "react"

export default function UseEffect(){

    // useEffect - Example: Preview Avatar - Multiple Image
    const [show, setShow] = useState(false)
    const [avatars, setAvatars] = useState([])

    const handleClick = () => {
        setShow(!show)
    }

    const handlePreviewAvatar = (e) => {
        const files = e.target.files
        const img = Array.from(files).map((file) => {
            return URL.createObjectURL(file)
        })
        setAvatars(img);
    }

    useEffect(() => {
        
        return () => {
            avatars.map(avatar => URL.revokeObjectURL(avatar))
        }
    }, [avatars])

    return (
        <div className='App'>
            <button onClick={handleClick}>{show === false ? 'Hiện' : 'Ẩn'}</button>
            {show && <input type='file' onChange={handlePreviewAvatar} multiple />}
            {
                avatars.map((avatar, index) => {
                    return <img src={avatar}  key={index} width='300px' alt='' />
                })
            }
        </div>
    )
} 