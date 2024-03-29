import React from "react";
import CartItem from "../components/CartItem";
// import {getAll as getallProducts} from "../api/products"
 // or
 import ProductsApi from "../api/products";
import {connect} from 'react-redux';
import {clearCart} from "../store/actions/actions";

class Cart extends React.Component{

    placeOrder = () => {
        // send the request to the server
        // clear cart
        this.props.clearCart();
        alert('We recieved your order, and we are working on it.');
    };


    render(){
        return (
            <div>
                <h1>Cart</h1>

                <div className="row">
                {this.props.cartItems.map((item, index) => 
                        <div className={'col-3'} key={item.product.id}>
                            <CartItem item={item} index={index} />
                        </div>
                    )}
                </div>

                <br />
                <h3>
                    Total: {this.props.totalPrice}
                </h3>

                <button className="btn btn-primary btn-block" onClick={this.placeOrder}>order Now!</button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
        totalPrice: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart()),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);