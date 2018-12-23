///Dependencias
import React, {Component} from 'react'
import PropTypes from 'prop-types'

//Recursos
import logo from './imagenes/logo.svg'
import './css/Header.css'

class Header extends Component{

  static PropTypes={
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired

  }

  render(){
    const {title, items} = this.props;
    return (
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
          <h3>
            {title}
          </h3>
          
          <ul className="menu">
            {items.map((item,key) => <li key={key}>{item}</li>  )}
          </ul>    
      </div>
    );
  }
}

export default Header;