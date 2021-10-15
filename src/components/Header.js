import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";
import About from './About'
import Contact from './Contact'
import '../App.css'

const MenuLink = ({ label, to, exact }) => {
    return (
        <Route path={to} exact={exact} children={({match}) => {
            const active = match ? 'active abc' : ''
            return (
                <li className={active}>
                    <Link to={to} className='link'>
                        {label}
                    </Link>
                </li>
            )
        }}/>
    )
}

function Header(){
    return (
        <Router>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <MenuLink label='Home' to='/' exact={true} />
                            <MenuLink label='About' to='/about' exact={false} />
                            <MenuLink label='Contact' to='/contact' exact={false} />
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