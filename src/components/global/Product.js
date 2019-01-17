import React from 'react'
import {addToCart} from '../../actionCreators';
import {connect} from 'react-redux';

function Product(props) {
    return ( 
    <div className="product">
        <h1>{props.name}</h1>
        <h5>{props.price}</h5>
        <button onClick={()=>props.addToCart({name:props.name,price:props.price})}>Add al carrito</button>
    </div> );
}


const mapStateToProps = state =>{
    return {
        cart:state.cart
    }
}

const mapDispatchToProps= {addToCart}


export default connect(mapStateToProps,mapDispatchToProps)(Product);