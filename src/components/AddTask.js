import React from "react";
import { Component } from "react";

class AddTask extends Component {
    render(){
        return  (
            <React.Fragment>
                <div className='add-task'>
                    <div className='add-task__heading'>
                        <h3 className='add-task__heading-title'>Thêm công việc</h3>
                        <i className="far fa-times-circle icon-close"></i>
                    </div>
                    <div className='add-task__form'>
                        <div className="form-group">
                            <label className='label-name'>Tên:</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Nhập tên công việc" />
                        </div>
                        <label className='label-name'>Trạng thái:</label>
                        <select className="form-control">
                            <option>Kích hoạt</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className='btns'>
                        <button type="button" className="btn btn-success btn-right">Lưu lại</button>
                        <button type="button" className="btn btn-danger">Hủy</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AddTask;
