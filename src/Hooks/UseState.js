import { useState } from "react"

export default function UseState(){

    // useState - Two-way binding and Example: To Do List
   
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => {
        const initialState = JSON.parse(localStorage.getItem('jobs')) ?? []
        return initialState
    })

    function handleAddJob(){
        setJobs(prev => {
            const newJobs = [...prev, job]
            const stringJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', stringJobs)
            return newJobs
        })
        setJob('')
    }

    function handleDelete(index){
        jobs.splice(index, 1)
        setJobs(prev => [...prev])
        localStorage.setItem('jobs', JSON.stringify(jobs))
    }
    
    return (
        <div className='App'>
            <input type='text' onChange={(e) => setJob(e.target.value)} value={job}/>
            <ul>
                {
                    jobs.map((job, index) => {
                        return (
                            <li key={index}>{job}
                                <span style={{cursor: "pointer"}} onClick={() => handleDelete(index)}> xóa</span>
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={handleAddJob}>Add</button>
        </div>
    )
} 