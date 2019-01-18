import {createStore} from 'redux'

var reducer = (state,action) =>{
    console.log(state);
    switch(action.type){
        case 'ADD_TO_CART': return {...state, cart: state.cart.concat([action.product])}
        default: return state;
    }
}

export default createStore(reducer, {cart:[]} )