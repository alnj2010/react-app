//Dependencias
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
//Assets
import './global/css/App.css';
//Components
import Header from './global/Header'
import Tienda from './global/Tienda'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Switch>
          <Route exact path="/" render={()=>(  <h1>Home</h1> )}/>
          <Route path="/tienda" component={ Tienda }/>
          <Route path="/aboutUs" render={()=>( <h1>aboutUs</h1> )}/>
        </Switch>  
      </div>
    );
  }
}

export default App;
