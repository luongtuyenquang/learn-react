// import logo from './logo.svg';
import './App.css';

import { Component } from 'react';

class Test extends Component {
    constructor(){
        super()
        this.state = {
            isShow: true
        }
    }
    handleClick = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render(){
        const show = this.state.isShow
        return (
            <div>
                <button onClick={this.handleClick}>{show ? 'Hiện' : 'Ẩn'}</button>
                <p>{show ? '' : 'Hello World'}</p>
                {show ? <div>Hiện ra (show = true)</div> : <div>Hiện ra (show = false)</div>}
            </div>
        )
    }
    
}


export default Test;
