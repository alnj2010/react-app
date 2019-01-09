import React, { Component } from 'react';
import './global/css/App.css';

//Components
import Header from './global/Header'
import Content from './global/Content'
import Footer from './global/Footer'

var items=[{link:'/', title:'Home'},{link:'/about', title:'About Us'},{link:'/contact', title:'Contact Us'}];
var title='Welcome to React';
class App extends Component {
  render() {
    const {children} =this.props;
    return (
      <div className="App">
        <Header title={title} items={items}/>
        <Content body={children}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
