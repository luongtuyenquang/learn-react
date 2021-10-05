import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import { FormContext } from "../context/MyGlobalContext";
import Input from "./Input";

class Form extends Component {
    render(){
        return  (
            <React.Fragment>
                Form Data
                <Input />
            </React.Fragment>
        )
    }
}

export default Form;
