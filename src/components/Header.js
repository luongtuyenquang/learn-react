import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
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
            <Switch>
                <Route path='/' exact />
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route> 
            </Switch>
        </Router>
    )
}
export default Header