
function CartItem(props) {
    const { product } = props.cart
    const { quantity } = props.cart

    function subTotal(price, quantity) {
        return price * quantity
    }
    return (
        <tr>
            <td>
                <img src={product.image} className="card-img-top cart-img" alt="..." />
            </td>
            <td>{product.name}</td>
            <td>{product.price}$</td>
            <td className='quantity'>
                <span>{quantity}</span>
                <span className='label-group'>
                    <label className='btn-label btn-label--left'>+</label>
                    <label className='btn-label btn-label--right'>-</label>
                </span>
            </td>
            <td>{subTotal(product.price, quantity)}$</td>
            <td>
                <button type="button" className="btn btn-danger">Hủy bỏ</button>
            </td>
        </tr>
    )
}
export default CartItem