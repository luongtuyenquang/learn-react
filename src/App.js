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
            tasks: [],
            isDisplayForm: true,
            updateTask: null
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
    handleToggleForm = () => {
        if(this.state.isDisplayForm && this.state.updateTask !== null){
            this.setState({
                isDisplayForm: true,
                updateTask: null
            })
        }else {
            this.setState({
                isDisplayForm: !this.state.isDisplayForm,
                updateTask: null
            })
        }
        
    }
    handleSubmitForm = (data) => {
        const tasks = this.state.tasks
        if(data.id === ''){
            data.id = this.randomID()
            tasks.push(data)
        }else {
            let idTask = tasks.map((task) => {
                return task.id
            })
            tasks[idTask.indexOf(data.id)] = data
        }
        this.setState({
            tasks: tasks,
            updateTask: null
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    handleDeleteTask = (index) => {
        const tasks = this.state.tasks
        tasks.splice(index -1 , 1)
        this.setState({
            tasks: tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    showTaskForm = () => {
        this.setState({
            isDisplayForm: true
        })
    }
    handleUpdateForm = (task) => {
        this.setState({
            updateTask: task
        })
        this.showTaskForm()
    }
    render(){
        const tasks = this.state.tasks
        const isDisplayForm = this.state.isDisplayForm
        const elmFormAddTask = isDisplayForm 
            ?   <AddTask 
                    submitForm={this.handleSubmitForm} 
                    closeForm={this.handleToggleForm}
                    updateTask={this.state.updateTask}
                /> 
            :   ''
        return (
            <div className='container'>
                <Title />
                <div className='row'>
                    <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        {elmFormAddTask}
                    </div>
                    <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' :
                        'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                    <button 
                        type="button" 
                        className="btn btn-primary btn-bottom btn-right"
                        onClick={this.handleToggleForm}
                    >
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
                        <ListTask 
                            tasks={tasks} 
                            deleteTask={this.handleDeleteTask}
                            updateTask={this.handleUpdateForm}
                        />
                    </div>
                </div>
            </div>
        )
    }
    
}


export default App;
