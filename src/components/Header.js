import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home'
import About from './About'

function Header(){
    return (
        <Router>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        </button>
                        <a className="navbar-brand" href="#1">Trang chủ</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><a href="#1">About</a></li>
                            <li><a href="#1">Contact</a></li>
                            <li className="dropdown">
                                <a href="#1" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#1">Action</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#1">Separated link</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
        </Router>
    )
}
export default Header