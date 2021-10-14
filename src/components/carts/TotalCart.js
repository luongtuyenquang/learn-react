
function TotalCart(props) {
    
    function totalPrice(cart){
        let total = 0
        for(let i = 0; i < cart.length; i++){
            total += cart[i].product.price * cart[i].quantity
        }
        return total
    }
    return (
        <div className='total-cart'>
            <p className='total-cart--right'>Tổng tiền:</p>
            <p>{totalPrice(props.carts)}$</p>
        </div>
    )
}
export default TotalCart