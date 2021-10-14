import { connect } from 'react-redux'
import Products from "../products/Products"

function ProductContainer(props){
    return (
        <Products products={props.products}/>
    )
}


const mapStateToProps = state => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps, null)(ProductContainer)