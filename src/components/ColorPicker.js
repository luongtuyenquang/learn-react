import React from "react";
import { Component } from "react";

class ColorPicker extends Component {

    render(){
        return  <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                    <div className="panel panel-primary">
                        <div className="panel-body">Color Picker</div>
                        <div className="panel-footer">Panel footer</div>
                    </div>
                </div>
    }
}

export default ColorPicker;
