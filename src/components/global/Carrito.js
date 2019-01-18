import React from 'react'
import {connect} from 'react-redux'
import {removeToCart} from '../../actionCreators'

function Carrito(props){
    return ( 
    <div >
        <div className="descripcion">{props.descrip}</div>
        <div className="precio">{props.precio}$</div>
        <button onClick={()=>props.removeToCart({descrip:props.descrip,precio:props.precio})}>-</button> 
    </div>
);
}

const mapDispatchToProps = { removeToCart }

export default connect(null, mapDispatchToProps) (Carrito);