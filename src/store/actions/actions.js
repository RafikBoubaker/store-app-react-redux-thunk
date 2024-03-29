import {ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART} from "./types";

//action creator
export function addToCart(productInfo,quantity){
        return {
            type:ADD_TO_CART,
            productInfo,
            quantity

           }    
}

/* without thunk
export function removeFromCart(index){
    return {
        type: REMOVE_FROM_CART,
        index
    }
} */



//wwith thunk

export function createRemoveFromCartAction(index){
    return {
        type: REMOVE_FROM_CART,
        index
    }
}

export function removeFromCart(index){
    return (dispatch) => {
        dispatch(createRemoveFromCartAction(index));
    };
}





export function clearCart(){
        return {
            type: CLEAR_CART
        }

    }
