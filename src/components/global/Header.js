import React from 'react'
import logo from './img/logo.svg';
import {Link} from 'react-router-dom'

function Header(props){
    return (
    <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <nav className="app-nav">
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/store">Store</Link></li>
            <li> <Link to="/aboutUs">About Us</Link></li>            
        </nav>
  </header>);
}

export default Header;