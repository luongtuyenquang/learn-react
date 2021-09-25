import React from "react";
import { Component } from "react";

class ChangeSize extends Component {
    changeSize(value){
        this.props.onChangeSize(value)
    }
    render(){
        return  <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                    <div className="panel panel-primary">
                        <div className="panel-body">Size: {this.props.fontSize}px</div>
                        <div className="panel-footer">
                        <a href="#1" className="btn btn-success" role="button" onClick={()=>this.changeSize(2)}>Tăng</a>
                        <a href="#1" className="btn btn-warning" role="button" onClick={()=>this.changeSize(-2)}>Giảm</a>
                        </div>
                    </div>
                </div>
    }
}

export default ChangeSize;
