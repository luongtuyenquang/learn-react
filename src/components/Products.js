import React from "react";
import { Route, NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router";
import ProductDetail from "./ProductDetail";

function Products(){
    const match = useRouteMatch()
    const products = [
        {
            id: 1,
            name: 'iPhone XS Max',
            price: 10000000,
            slug: 'iphone-xs-max'
        },
        {
            id: 2,
            name: 'iPhone 11 Pro Max',
            price: 20000000,
            slug: 'iphone-11-pro-max'
        },
        {
            id: 3,
            name: 'iPhone 12 Pro Max',
            price: 30000000,
            slug: 'iphone-12-pro-max'
        },
    ]
    const render = products.map((product, index) => {
        return (
            <p key={index}>
                <NavLink to={`${match.url}/${product.slug}`}>
                    {product.id} - {product.name} - {product.price}
                </NavLink>
            </p>
        )
    })
    return (
        <div className='container'>
            <ul>
                {render}
            </ul>
            <Route path='/products/:slug'>
                <ProductDetail />
            </Route>
        </div>
    )
}
export default Products