// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
// import Product from './components/Product';
import ColorPicker from './components/ColorPicker';
import ChangeSize from './components/ChangeSize';
import Result from './components/Result';
import Reset from './components/Reset';
import { Component } from 'react';


class App extends Component {
    constructor(){
        super()
        this.state = {
            color: 'red',
            fontSize: 15
        }
    }
    setActiveColor = (color) => {
        this.setState({
            color: color,
        })
    }
    receiveSize = (value) => {
        if(this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36){
            this.setState({
                fontSize: this.state.fontSize + value
            })
        }
    }
    resetDefault = (value) => {
        if(value === true){
            this.setState({
                color: 'red',
                fontSize: 15
            })
        }
    }
    render(){
        return <div className='wrapper'>
                <Header />
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <div className='app'>
                    <ColorPicker color={this.state.color} receiveColor={this.setActiveColor}/>
                    <ChangeSize fontSize={this.state.fontSize} onChangeSize={this.receiveSize}/>
                    <Result color={this.state.color} fontSize={this.state.fontSize} />
                    <Reset onResetDefault={this.resetDefault}/>
                </div>
                </div>
            </div>;
    }
    
}

export default App;
