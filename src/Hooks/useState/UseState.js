import { useState } from "react"

export default function UseState(){

    // Two-way binding and Example: Radio
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
                                <input type='radio' checked={checked === course.id} onChange={() => setChecked(course.id)} /> {course.name}
                            </label>
                        )
                    })
                }
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
} 