import './product.css'
import Header from "./components/Header"
import Message from './components/Message'
import ProductContainer from './components/containers/ProductContainer'
import Carts from './components/carts/Carts'


function App(){
    return (
        <div className='app'>
            <Header />
            <div className='container'>
                <ProductContainer />
                <Carts />
            </div>
            <Message />
            
        </div>
    )
}

export default App