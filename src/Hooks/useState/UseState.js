import { useState } from "react"

export default function UseState(){

    // Two-way binding and Example: type Checkbox
    const courses = [
        {
            id: 1,
            name: 'HTML'
        },
        {
            id: 2,
            name: 'CSS'
        },
        {
            id: 3,
            name: 'Javascript'
        },
    ]
    const [checked, setChecked] = useState('')

    function handleChecked(id){
        setChecked(prev => {
            const isChecked = checked.includes(id)
            if(isChecked){
                return checked.filter(item => item !== id)
            }else {
                return [...prev, id]
            }
        })
    }

    function handleSubmit(){
        console.log(checked);
    }

    return (
        <div className='App'>
            <div style={{display: "grid"}}>
                {
                    courses.map(course => {
                        return (
                            <label key={course.id}>
                                <input type='checkbox' 
                                    checked={checked.includes(course.id)} 
                                    onChange={() => handleChecked(course.id)} 
                                /> {course.name}
                            </label>
                        )
                    })
                }
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
} 