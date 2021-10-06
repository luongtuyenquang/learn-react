// import logo from './logo.svg';
import './App.scss';
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
            updateTask: null,
            filter: {
                name: '',
                status: 0
            },
            sortName: 'name',
            sortStatus: 0
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
    handleSearch = (filterName, filterStatus) => {
        filterStatus = Number(filterStatus)
        this.setState({
            filter: {
                name: filterName,
                status: filterStatus
            }
        })
    }
    handleSearchTask = (keyword) => {
        this.setState({
            keyword: keyword
        })
    }
    handleSort = (sortName, sortStatus) => {
        this.setState({
            sortName: sortName,
            sortStatus: sortStatus
        })
    }
    render(){
        let tasks = this.state.tasks
        const sortName = this.state.sortName
        const sortStatus = this.state.sortStatus
        const isDisplayForm = this.state.isDisplayForm
        const elmFormAddTask = isDisplayForm 
            ?   <AddTask 
                    submitForm={this.handleSubmitForm} 
                    closeForm={this.handleToggleForm}
                    updateTask={this.state.updateTask}
                /> 
            :   ''
        const filter = this.state.filter
        if(filter){
            if(filter.name){
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1
                })
            }
            tasks = tasks.filter((task) => {
                if(filter.status === 0){
                    return task
                } else {
                    const switchStatus = filter.status === 1 ? true : false
                    return task.status === switchStatus
                }
            })
        }
        if(sortName === 'name'){
            tasks.sort((a, b) => {
                if(a.name.toLowerCase() > b.name.toLowerCase()) return sortStatus
                else if(a.name.toLowerCase() < b.name.toLowerCase()) return -sortStatus
                else return ''
            })
        }
        if(sortName === 'status'){
            tasks = tasks.filter((task) => {
                 if(sortStatus === 0) return task
                 else if(sortStatus === 2) return task.status === true
                 else if(sortStatus === -2) return task.status === false
                 else return ''
            })
        }
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
                        <Filter 
                            filterTask={this.handleSearch}
                            sort={this.handleSort}
                            sortName={sortName}
                            sortStatus={sortStatus}
                        />
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
