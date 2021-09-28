// import logo from './logo.svg';
// import './App.css';

import { Component } from "react";

class TaskItem extends Component {
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
                        <button type="button" className="btn btn-warning btn-right">Sửa</button>
                        <button type="button" className="btn btn-danger">Xóa</button>
                    </td>
                </tr>
            </tbody>
        )
    }
    
}

export default TaskItem;
