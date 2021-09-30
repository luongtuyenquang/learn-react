import React from "react";
import { Component } from "react";

class Filter extends Component {
    constructor(){
        super()
        this.state = {
            filterName:'',
            filterStatus: 0, // all 0 active 1 deactive -1
        }
    }
    handleFilter = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.props.filterTask(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus,
        )
        this.setState({
            [name]: value
        })
    }
    handleSearch = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }
    render(){
        return  (
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 margin-none mg-bottom'>
                <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 margin-none'>
                    <div className='search'>
                        <input 
                            type="text" 
                            className="form-control bd-radius" 
                            id="exampleInputEmail1" 
                            placeholder="Nhập tên công việc" 
                            value={this.state.filterName}
                            onChange={this.handleFilter}
                            name='filterName'
                        />
                        <button 
                            type="button" 
                            className="btn btn-primary bd-radius"
                            onClick={this.handleBtnSearch}
                        >
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                    <div className='sort'>
                        <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Sắp xếp
                                <i className="fas fa-filter pd-left"></i>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li><a href="#1">Từ A - Z</a></li>
                                <li><a href="#1">Từ Z - A action</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <select 
                                className="form-control" 
                                name='filterStatus'
                                value={this.state.filterStatus}
                                onChange={this.handleFilter}
                            >
                                <option value={0}>Tất cả</option>
                                <option value={1}>Kích hoạt</option>
                                <option value={-1}>Ẩn</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
                    
    }
}

export default Filter;
