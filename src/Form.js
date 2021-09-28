// import logo from './logo.svg';
// import './App.css';
import { Component } from 'react';


class Form extends Component {
    constructor(){
        super()
        this.state = {
            inputUsername: '',
            inputPassword: '',
            inputTextArea: '',
            inputSelect: 'male', //Mặc định không chọn thì value = rỗng
            inputRadio: 'yes',
        }
    }
    handleChange = (e) => {
        // Handle multi input
        const inputName = e.target.name
        const inputValue = e.target.type === 'checkbox' ? e.target.checked: e.target.value
        this.setState({
            [inputName]: inputValue
        })
    }
    handleSubmit =(e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render(){
        return <div className='wrapper'><br /><br />
                    <div className='container'>
                        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                            <div className="panel panel-default">
                                <div className="panel-heading">Form</div>
                                <div className="panel-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>User name:</label>
                                        <input type="text"
                                            className="form-control" 
                                            name="inputUsername"
                                            onChange={this.handleChange}
                                        /><br />  
                                        <label>User name:</label>
                                        <input type="password"
                                            className="form-control" 
                                            name="inputPassword"
                                            onChange={this.handleChange}
                                        /><br />  
                                        <label>Mô tả:</label>
                                        <textarea 
                                            className="form-control" 
                                            rows="3"
                                            name="inputTextArea"
                                            onChange={this.handleChange}
                                        ></textarea><br /> 
                                        <label>Giới tính:</label>
                                        <select className="form-control" onChange={this.handleChange} name="inputSelect">
                                            <option value='male'>Nam</option>
                                            <option value='female'>Nữ</option>
                                            <option value='other'>Khác</option>
                                        </select><br />
                                        <div style={{display: 'flex'}}>
                                            <label>Tôn giáo:</label>
                                            <input type="radio" 
                                                name="inputRadio" 
                                                value="yes"
                                                checked={this.state.inputRadio === 'yes'}
                                                onChange={this.handleChange}
                                                style={{marginLeft: 20 + 'px'}}/>
                                            <label className="radio-inline" style={{paddingLeft: 5 + 'px'}}>Có</label>
                                            <input type="radio" 
                                                name="inputRadio" 
                                                value="no"
                                                checked={this.state.inputRadio === 'no'}
                                                onChange={this.handleChange} 
                                                style={{marginLeft: 20 + 'px'}}/>
                                            <label className="radio-inline input-radio" style={{paddingLeft: 5 + 'px'}}>Không</label>
                                            <br /><br />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Lưu lại</button>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    }
    
}

export default Form;
