
function ProductItem(props) {
    const { product } = props

    function showRating(rating){
        const result = []
        for(let i = 1; i <= 5; i++){
            if(i <= rating){
                result.push(<i className='fa fa-star star-color' key={i}></i>)
            }else {
                result.push(<i className='far fa-star start-color--blur' key={i}></i>)
            }
        }
        return result
    }
    return (
        <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
            <div className="card">
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">Giá: {product.price}$</p>
                    <ul className='rating-list'>
                        <li className='rating-item'>
                            { showRating(product.rating) }
                        </li>
                    </ul>
                    <a href="#1" className="btn btn-primary">Thêm vào giỏ hàng</a>
                </div>
            </div>
        </div>
    )
}

export default ProductItem