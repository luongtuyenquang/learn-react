import React from "react";
import { Component } from "react";

class ColorPicker extends Component {
    constructor(){
        super()
        this.state = {
            colors: ['red', 'green', 'blue', 'pink']
        }
    }
    showColor(color){
        return {
            backgroundColor: color
        }
    }
    setActiveColor(color){
        this.props.receiveColor(color)
    }
    render(){
        const getColor = this.state.colors.map((color, index) => {
            return <span 
                        key={index} 
                        style={this.showColor(color)} 
                        className={this.props.color === color ? 'active' : ''}
                        onClick={() => this.setActiveColor(color)}
                    >
                    </span>
        })
        return  <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                    <div className="panel panel-primary">
                        <div className="panel-body">Color Picker</div>
                        <div className="panel-footer">
                            {getColor}
                        </div>
                    </div>
                </div>
    }
}

export default ColorPicker;
