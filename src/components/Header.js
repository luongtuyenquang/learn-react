import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Routes from "./Routes";

import '../App.css'

function Header(){
    return (
        <Router>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <NavLink to='/' exact >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' >About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact' >Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to='/form' >Form</NavLink>
                            </li>
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
            <Routes />
        </Router>
    )
}
export default Header