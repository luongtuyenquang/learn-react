import React from "react";
import { Component } from "react";

class Result extends Component {
    showColor(){
        return {
            color: this.props.color,
            borderColor: this.props.color
        }
    }
    render(){
        return  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <p>Color: red - Font-size: 15px</p>
                    <div className='result' style={this.showColor()}>
                        Nội dung text
                    </div>
                </div>
    }
}

export default Result;
