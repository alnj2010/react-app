import React, {Component} from 'react'
//Components
import ProductList from './ProductList'
import ShoppingCart from './ShoppingCart'

import './css/Content.css'

class Content extends Component{
  render(){
    return (
      <div className="content">
        <div className="App-intro">
          <ProductList/>
          <ShoppingCart/>
        </div>
      </div>
    );
  }
}

export default Content;