// import logo from './logo.svg';
// import './App.css';
import { Component } from 'react';


class Form extends Component {
    constructor(){
        super()
        this.state = {
            inputUsername: '',
            inputPassword: '',
            inputTextArea: ''
        }
    }
    handleChange = (e) => {
        // Handle multi input
        const inputName = e.target.name
        const inputValue = e.target.value
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
