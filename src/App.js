// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';



function App() {
    return <div className='wrapper'>
        <Header />
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <Product />
        </div>
    </div>;
}

export default App;
