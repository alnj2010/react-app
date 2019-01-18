//Dependencias
import React from 'react'
import {connect} from 'react-redux'
//Components
import Producto from './Producto'
import Carrito from './Carrito'

function Tienda(props){
    return (
        <div className="tienda">
            <div className="productos">
                <Producto img="&#9730;" descrip="paragua" precio={2}/>
                <Producto img="&#9731;" descrip="snowman" precio={4}/>
                <Producto img="&#9733;" descrip="star" precio={6}/>  
            </div>
            
            <div className="carrito">
                {props.cart.map((product,index)=>(<Carrito key={index} descrip={product.descrip} precio={product.precio}/>))}
            </div>

            
        </div>
    )
}

const mapStateToProps=(state) => {
    return {
        cart:state.cart
    }
}

export default connect(mapStateToProps,null)(Tienda)