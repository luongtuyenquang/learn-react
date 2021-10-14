import ProductItem from "./ProductItem"

function Products(){
    return (
        <section className='products'>
            <h3 className='title'>Danh sách sản phẩm</h3>
            <div className='row'>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </section>
    )
}
export default Products