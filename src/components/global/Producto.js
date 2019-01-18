import React from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../../actionCreators'

function Producto(props){
    return ( 
    <div className="producto">
        <div className="imagen">{props.img}</div>
        <div className="descripcion">{props.descrip}</div>
        <div className="precio">
            <button onClick={()=>props.addToCart({descrip:props.descrip,precio:props.precio})}>{props.precio}$</button> 
        </div>
    </div>
);
}


const mapDispatchToProps = { addToCart }

export default connect(null, mapDispatchToProps) (Producto);