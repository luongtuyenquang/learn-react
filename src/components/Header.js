import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import About from './About'
import Contact from './Contact'
import '../App.css'

function Header(){
    return (
        <Router>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                        <li>
                            <NavLink exact activeClassName='active' to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='active' to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='active' to="/contact">Contact</NavLink>
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
            <Route path='/' />
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/contact'>
                <Contact />
            </Route>
        </Router>
    )
}
export default Header