// import logo from './logo.svg';
// import './App.scss';
import { useEffect, useState, useRef } from 'react';

function PostFilter(props){
   let [value, setValue] = useState('')
    let timeoutRef = useRef()
   function handleValueChange(e){
       setValue = e.target.value

       if(timeoutRef.current){
           clearTimeout(timeoutRef.current)
       }
       timeoutRef.current = setTimeout( () => {
            value = e.target.value
            props.change(value)
       }, 300)
        
   }
    return (
        <div>
            <form>
                <h3>Search</h3>
                <input type='text' onChange={handleValueChange}></input>     
            </form>
        </div>
    )
}

export default PostFilter;
