import React, {Component} from 'react'
import logo from './imagenes/logo.svg'
import './css/Header.css'

class Header extends Component{
  render(){
    return (
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
          <h3>
            Welcome to React
          </h3>   
      </div>
    );
  }
}

export default Header;