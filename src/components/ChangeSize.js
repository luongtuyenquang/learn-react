import React from "react";
import { Component } from "react";

class ChangeSize extends Component {

    render(){
        return  <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                    <div className="panel panel-primary">
                        <div className="panel-body">Size: 15px</div>
                        <div className="panel-footer">
                        <a href="#1" className="btn btn-success" role="button">Tăng</a>
                        <a href="#1" className="btn btn-warning" role="button">Giảm</a>
                        </div>
                    </div>
                </div>
    }
}

export default ChangeSize;
