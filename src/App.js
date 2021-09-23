// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

const courses = [
    {
        id: 1,
        name: 'HTML-CSS',
        price: 10,
    },
    {
        id: 2,
        name: 'Javascript',
        price: 20,
    },
    {
        id: 3,
        name: 'PHP',
        price: 30,
    },
    {
        id: 4,
        name: 'Python',
        price: 0,
    },
]

const showCourse = courses.map((course) => {
    if(course.price > 0){
        return <Product name={course.name} price={course.price} key={course.id}/>
    }
})

function App() {
    return <div className='wrapper'>
        <Header />
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        {showCourse}
        </div>
    </div>;
}

export default App;
