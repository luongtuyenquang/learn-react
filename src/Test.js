// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { TestContext } from './context/MyGlobalContext'
import Form from './components/Form';

class Test extends Component {
    constructor(){
        super()
        this.state = {
            info: {
                name: 'Luong Tuyen Quang',
                age: 23,
                address: 'Đà Lạt',
            }
        }
        
    }
    render(){
        const value = this.state.info
        return (
            <TestContext.Provider value={value}>
                <Form />
            </TestContext.Provider>
        )
    }
    
}


export default Test;
