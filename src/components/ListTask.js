import React from "react";
import { Component } from "react";
import TaskItem from "./TaskItem";

class ListTask extends Component {

    render(){
        const tasks = this.props.tasks
        const renderTasks = tasks.map((task, index) => {
            return <TaskItem task={task} key={task.id} index={index + 1}/>
        })
        return  (
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
                    {renderTasks}
                </table>
            </div>
        )
    }
}

export default ListTask;
