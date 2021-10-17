import React from "react";
import { useRouteMatch } from 'react-router-dom'

function ProductDetail(){
    const match = useRouteMatch()
    
    return (
        <h3>Chi tiết sản phẩm: {match.params.slug}</h3>
    )
}
export default ProductDetail