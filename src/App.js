// import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import AddTask from './components/AddTask';
import Filter from './components/Filter';
import ListTask from './components/ListTask';

function App() {
    return (
        <div className='container'>
            <Title />
            <div className='row'>
                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                    <AddTask />
                </div>
                <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>
                    <Filter />
                    <div className='list-task'>
                        <table className="table table-bordered">
                            <thead>
                                <tr className='info'>
                                    <th scope="col">STT</th>
                                    <th scope="col">Tên</th>
                                    <th scope="col">Trạng thái</th>
                                    <th scope="col">Hành động</th>
                                </tr>
                            </thead>
                            <ListTask />
                            <ListTask />
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default App;
