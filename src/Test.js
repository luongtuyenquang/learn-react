// import logo from './logo.svg';
import './App.css';

import { Component } from 'react';

class Test extends Component {
    constructor(){
        super()
        this.state = {
            count: 0,
            isShow: false
        }
    }
    handleCrease = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    handleDecrease = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    componentDidMount(){
        console.log('ComponentDidMount');
    }
    componentDidUpdate(){
        console.log('ComponentDidUpdate');
    }
    componentWillUnmount(){
        console.log('ComponentWillUnmount');
    }
    render(){
        console.log('Render');
        return (
            <div>
                <p onClick={this.handleDecrease}>-</p>
                <span>{this.state.count}</span>
                <p onClick={this.handleCrease}>+</p>
                <p>{this.state.isShow ? 'Delete' : ''}</p>
            </div>
        )
    }
    
}


export default Test;
