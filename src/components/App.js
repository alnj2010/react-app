import React, { Component } from 'react';
import './global/css/App.css';

//Components
import Header from './global/Header'
import Content from './global/Content'
import Footer from './global/Footer'

var items=['opcion1','opcion2','opcion3','opcion4'];
var title='Welcome to React';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={title} items={items}/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
