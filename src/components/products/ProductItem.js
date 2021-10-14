
function ProductItem() {
    return (
        <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
            <div className="card">
                <img src="https://salt.tikicdn.com/cache/400x400/ts/product/b0/39/57/a5c7b46a18cd2e077fb2d805ed600e67.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">iPhone 11 Pro Max</h5>
                    <p className="card-text">Sản phẩm do Apple sản xuất</p>
                    <p className="card-text">Giá: 15$</p>
                    <a href="#1" className="btn btn-primary">Thêm vào giỏ hàng</a>
                </div>
            </div>
        </div>
    )
}
export default ProductItem