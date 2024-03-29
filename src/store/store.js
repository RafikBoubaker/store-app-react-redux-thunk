import {createStore, compose, applyMiddleware , combineReducers} from "redux";
import thunk from "redux-thunk";
import cartReduer from "./reducers";
import throttle from 'lodash.throttle';

function loadState(){
    try{
        const state = localStorage.getItem('cart');

        if(state !== null){
            return JSON.parse(state);
        }        
    } catch(e){
        // ignore errors
    }

    return {
        cart: []
    };
}

function saveState(state){
    console.log('saveState..')
    localStorage.setItem('cart', JSON.stringify(state));
}


const appReducers = combineReducers({
    cart: cartReduer,
});



const store = createStore(appReducers, loadState(), compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

store.subscribe(throttle(() => {
    saveState(store.getState());
}, 2000));

export default store;




 // const initialState = {
       
        /* {
            product: {
                "id": 1,
                "name": "White Cat",
                "price": 100,
                "image": "/images/1.jpg",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            quantity: 2
        } */
    

/* function reducers(state){
    return state;
} */