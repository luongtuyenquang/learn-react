// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
// import Product from './components/Product';
import ColorPicker from './components/ColorPicker';
import ChangeSize from './components/ChangeSize';
import Result from './components/Result';
import Reset from './components/Reset';


function App() {
    return <div className='wrapper'>
        <Header />
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <div className='app'>
            <ColorPicker />
            <ChangeSize />
            <Result />
            <Reset />
        </div>
        </div>
    </div>;
}

export default App;
