import CartItem from "./CartItem"
import TotalCart from "./TotalCart"

function Carts() {
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
                <CartItem />
                <CartItem />
                <CartItem />
            </tbody>
            </table>
            <TotalCart />
        </section>
    )
}
export default Carts