import './product.css'
import Header from "./components/Header"
import Products from "./components/products/Products"
import Message from './components/Message'
import Carts from './components/carts/Carts'


function App(){
    return (
        <div className='app'>
            <Header />
            <div className='container'>
                <Products />
                <Carts />
            </div>
            <Message />
            
        </div>
    )
}

export default App