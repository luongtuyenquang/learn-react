import { useEffect, useState } from "react"

export default function UseEffect(){

    // useEffect: Nhấn vào tab nào thì sẽ hiện thông tin của tab đó
   const tabs = ['photos', 'todos', 'users']
   const [photos, setPhotos] = useState([])
   const [type, setType] = useState('photos')

   useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => setPhotos(data))
   }, [type])

    return (
        <div className='App'>
            {
                tabs.map((tab, index) => {
                    return <button className={tab === type ? 'active-tab' : ''} onClick={() => setType(tab)} key={index}>{tab}</button>
                })
            }
            <ul>
                {
                    photos.map((photo, index) => {
                        return <li key={index}>{photo.title || photo.name}</li>
                    })
                }
            </ul>
        </div>
    )
} 