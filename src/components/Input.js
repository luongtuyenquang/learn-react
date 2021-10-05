import React from "react";
import { Component } from "react";
import { TestContext, FormContext } from '../context/MyGlobalContext'

class Input extends Component {
    render(){
        return  (
            <React.Fragment>
                <input type='text' value={this.context.name}/>
            </React.Fragment>
        )
    }
}

Input.contextType = TestContext
export default Input;
