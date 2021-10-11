import React from "react";
import { Component } from "react";

class Product extends Component {
    logName = () => {
        console.log(this.props.name)
    }
    render(){
        return  (
            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                <div className="thumbnail">
                        <img className='img' src="https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-midnight-2-600x600.jpg" alt="" />
                        <div className="caption">
                            <h3 onClick={this.logName}>{this.props.name}</h3>
                            <p>{this.props.price}</p>
                            <a href="#1" className="btn btn-primary" role="button">Mua</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Product;
