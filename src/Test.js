// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Test extends Component {
    constructor(){
        super()
        this.state = {
            usd: 0,
            vnd: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            vnd: event.target.value * 23000
        })
    }
    render(){
        
        return (
            <div>
                <div className='group-form'>
                    USD:
                    <input type='test' onChange={this.handleChange}></input>
                </div><br />
                <div className='group-form'>
                    VNĐ:
                    <input type='test' placeholder={this.state.vnd}></input>
                </div>
            </div>
        )
    }
    
}


export default Test;
