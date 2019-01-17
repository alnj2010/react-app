import React from 'react'
import Product from './Product'

function ProductList(props){
    return ( 
        <div className="product-list">
            <Product name={'camisa'} price={200} />
            <Product name={'Pantalon'} price={400} />
        </div> 
    );
}



export default ProductList;