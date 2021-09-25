import React from "react";
import { Component } from "react";

class Product extends Component {
    constructor(){
        super()
        this.state = {
            courses: [
                {
                    id: 1,
                    name: 'HTML-CSS',
                    price: 10,
                },
                {
                    id: 2,
                    name: 'Javascript',
                    price: 20,
                },
                {
                    id: 3,
                    name: 'PHP',
                    price: 30,
                },
                {
                    id: 4,
                    name: 'Python',
                    price: 0,
                },
            ]
        }
    }
    render(){
        const showCourse = this.state.courses.map((course) => {
            if(course.price > 0){
                return <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3' key={course.id}>
                            <div className="thumbnail">
                                <img className='img' src="https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-midnight-2-600x600.jpg" alt="" />
                                <div className="caption">
                                    <h3>{course.name}</h3>
                                    <p>{course.price}</p>
                                    <a href="#1" className="btn btn-primary" role="button">Mua</a>
                                </div>
                            </div>
                        </div>
                    }
                })
        return showCourse
    }
}

export default Product;
