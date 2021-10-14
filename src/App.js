import './product.css'
import Header from "./components/Header"
import Message from './components/Message'
import ProductContainer from './components/containers/ProductContainer'
import CartContainer from './components/containers/CartContainer'

function App(){
    return (
        <div className='app'>
            <Header />
            <div className='container'>
                <ProductContainer />
                <CartContainer />
            </div>
            <Message />
            
        </div>
    )
}

export default App