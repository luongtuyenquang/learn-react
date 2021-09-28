import React from "react";
import { Component } from "react";

class Title extends Component {
    changeSize(value){
        this.props.onChangeSize(value)
    }
    render(){
        return  <h1 className='title'>TO DO LIST</h1>
    }
}

export default Title;
