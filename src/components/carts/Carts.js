import CartItem from "./CartItem"
import TotalCart from "./TotalCart"

function Carts(props) {
    const { carts } = props

    function showCart(){
        return carts.map((cart, index) => <CartItem cart={cart} key={index} />)
    }

    return (
        <section>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Hình ảnh</th>
                <th scope="col">Sản phẩm</th>
                <th scope="col">Giá</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Tổng cộng</th>
                <th scope="col">Thao tác</th>
                </tr>
            </thead>
            <tbody>
                { showCart() }
            </tbody>
            </table>
            <TotalCart carts={carts}/>
        </section>
    )
}
export default Carts