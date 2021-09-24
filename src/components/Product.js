import React from "react";

function Product(props) {
    const showLog = () => {
        console.log(props.name)
    }
    return (
        <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
            <div className="thumbnail">
                    <img className='img' src="https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-midnight-2-600x600.jpg" alt="" />
                    <div className="caption">
                        <h3>{props.name}</h3>
                        <p>{props.price}</p>
                        <a href="#1" className="btn btn-primary" onClick={ showLog }>Mua</a>
                    </div>
            </div>role="button"
        </div>
    );
}

export default Product;
