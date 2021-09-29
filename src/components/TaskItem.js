// import logo from './logo.svg';
// import './App.css';

import { Component } from "react";

class TaskItem extends Component {
    deleteTask = () => {
        this.props.deleteTask(this.props.index)
    }
    updateTask = () => {
        this.props.updateTask(this.props.task)
    }
    render(){
        let tasks = this.props.task
        let index = this.props.index
        return (
            <tbody>
                <tr>
                    <th scope="row">{index}</th>
                    <td>{tasks.name}</td>
                    <td className={tasks.status === true ? 'access' : 'hiddens'}>
                        {tasks.status === true ? 'Kích hoạt' : 'Ẩn'}
                    </td>
                    <td>
                        <button 
                            type="button" 
                            className="btn btn-warning btn-right"
                            onClick={this.updateTask}
                        >
                            Sửa
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-danger" 
                            onClick={this.deleteTask}
                        >
                            Xóa
                        </button>
                    </td>
                </tr>
            </tbody>
        )
    }
    
}

export default TaskItem;
