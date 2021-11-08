import {useMemo, useRef, useState} from 'react'

export default function UseMemo(){

    const [products, setProducts] = useState([])
    const nameRef = useRef()
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    
    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: Number(price)
        }])
        setName('')
        setPrice('')
        nameRef.current.focus()
    }

    const total = useMemo(() => {
        return products.reduce((total, curr) => {
            return total + curr.price
        }, 0)
    }, [products])

    return (
        <div>
            <label> Nhập tên sản phẩm:
                <input type='text' ref={nameRef} onChange={(e) => setName(e.target.value)} value={name} />
            </label>
            <br />
            <label> Nhập giá:
                <input type='text' onChange={(e) => setPrice(e.target.value)} value={price} />
            </label>
            <br />
            <button onClick={handleSubmit}>Thêm sản phẩm</button>
            <ul>
                {
                    products.map((product, index) => {
                        return <li key={index}>{product.name} - {product.price}</li>
                    })
                }
            </ul>
            <h3>Tổng tiền: {total}</h3>
        </div>
    )
}