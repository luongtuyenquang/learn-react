import ProductItem from "./ProductItem"
import { connect } from 'react-redux'


function Products(props){
    const products = props.products
    function showProduct(products){
        return products.map((product, index) => {
            return <ProductItem key={index} product={product}/>
        })
    }
    return (
        <section className='products'>
            <h3 className='title'>Danh sách sản phẩm</h3>
            <div className='row'>
                { showProduct(products) }
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps, null)(Products)