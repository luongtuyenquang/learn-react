import React from "react";
import { Component } from "react";

class Reset extends Component {
    resetDefault = () => {
        this.props.onResetDefault(true)
    }
    render(){
        return  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <div className='reset'>
                        <a href="#1" className="btn btn-primary" role="button" onClick={this.resetDefault}>Reset</a>
                    </div>
                </div>
    }
}

export default Reset;
