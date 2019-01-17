import React from 'react'
import {connect} from 'react-redux'

import {removeFromCart} from '../../actionCreators'
// eslint-disable-next-line
function ShowProduct(props){
    return ( 
    <div className="show-product">
         <strong>{props.name}</strong> {props.price}
    </div> )
}

function ShoppingCart(props) {
    var total=0;
    return ( 
        <div className="ShoppingCart">
            <ul>
                {props.cart.map( (product,index) => {total+=product.price;return ( <li key={index.toString()}>   <ShowProduct name={product.name} price={product.price}/> <button onClick={()=>props.removeFromCart(product)}> - </button>  </li> )} )}
            </ul>
            <h1>Total {total}$</h1>
        </div> 
    );
  
}
const mapStateToProps = state =>{
    return {
        cart:state.cart
    }
}

const mapDispatchToProps= {removeFromCart}

export default connect (mapStateToProps,mapDispatchToProps)(ShoppingCart);