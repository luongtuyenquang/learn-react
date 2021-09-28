// import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import AddTask from './components/AddTask';
import Filter from './components/Filter';
import ListTask from './components/ListTask';
import { Component } from 'react';

class App extends Component {
    constructor(){
        super()
        this.state = {
            tasks: []
        }
    }
    componentDidMount(){
        if(localStorage && localStorage.getItem('tasks')){
            const tasks = JSON.parse(localStorage.getItem('tasks'))
            this.setState({
                tasks: tasks
            })
        }
    }
    randomString(){
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1)
    }
    randomID(){
        return this.randomString() + '-' + this.randomString() + '-' +
        this.randomString() + '-' + this.randomString() + '-' + this.randomString()
    }
    getData = () => {
        const tasks = [
            {
                id: this.randomID(),
                name: 'Học online',
                status: true,
            },
            {
                id: this.randomID(),
                name: 'Học ReactJS',
                status: false,
            },
            {
                id: this.randomID(),
                name: 'Đi chơi',
                status: true,
            }
        ]
        this.setState({
            tasks: tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    render(){
        const tasks = this.state.tasks

        return (
            <div className='container'>
                <Title />
                <div className='row'>
                    <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                        <AddTask />
                    </div>
                    <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>
                    <button type="button" className="btn btn-primary btn-bottom btn-right">
                        <i className="fas fa-plus"></i>
                        Thêm công việc
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-primary btn-bottom"
                        onClick={this.getData}
                    >
                        <i className="fas fa-plus"></i>
                        Hiển thị dữ liệu
                    </button>
                        <Filter />
                        <ListTask tasks={tasks} />
                    </div>
                </div>
            </div>
        )
    }
    
}


export default App;
