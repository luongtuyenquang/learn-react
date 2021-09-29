import React from "react";
import { Component } from "react";

class AddTask extends Component {
    constructor(){
        super()
        this.state = {
            id: '',
            name: '',
            status: true
        }
    }
    handleCloseForm = () => {
        this.props.closeForm()
    }
    handleChange = (event) => {
        const name = event.target.name
        let value = event.target.value
        if(name === 'status'){
            value = event.target.value === 'true' ? true : false
        }
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.submitForm(this.state)
        this.handleResetForm()
    }
    handleResetForm = (event) => {
        this.setState({
            name: '',
            status: true
        })
    }
    componentDidMount(){
        if(this.props.updateTask){
            this.setState({
                id: this.props.updateTask.id,
                name: this.props.updateTask.name,
                status: this.props.updateTask.status,
            })
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.updateTask){
            this.setState({
                id: nextProps.updateTask.id,
                name: nextProps.updateTask.name,
                status: nextProps.updateTask.status,
            })
        }else if(nextProps && nextProps.updateTask === null){
            this.setState({
                id: '',
                name: '',
                status: true
            })
        }
    }
    render(){
        const id = this.state.id
        return  (
            <React.Fragment>
                <div className='add-task'>
                    <div className='add-task__heading'>
                        <h3 className='add-task__heading-title'>{id !== '' ? 'Cập nhật công việc' : 'Thêm công việc'}</h3>
                        <i className="far fa-times-circle icon-close" onClick={this.handleCloseForm}></i>
                    </div>
                    <form className='add-task__form' onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className='label-name'>Tên:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                placeholder="Nhập tên công việc" 
                                name='name'
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <label className='label-name'>Trạng thái:</label>
                        <select 
                            className="form-control" 
                            name='status'
                            onChange={this.handleChange}
                            value={this.state.status}
                        >
                            <option value={true}>Kích hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <div className='btns'>
                        <button type="submit" className="btn btn-success btn-right">Lưu lại</button>
                        <button type="button" className="btn btn-danger" onClick={this.handleResetForm}>Reset</button>
                    </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default AddTask;
