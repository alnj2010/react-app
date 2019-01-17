//Dependencias
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
//Assets
import './global/css/App.css';
//Components
import Header from './global/Header'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Switch>
          <Route exact path="/" render={()=>( <h1>Home</h1> )}/>
          <Route path="/store" render={()=>( <h1>store</h1> )}/>
          <Route path="/aboutUs" render={()=>( <h1>aboutUs</h1> )}/>
        </Switch>  
      </div>
    );
  }
}

export default App;
