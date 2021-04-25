import React from "react";
import ProductItem from "../components/productItem";
// import {getAll as getallProducts} from "../api/products"
 // or
 import ProductsApi from "../api/products";
export default class Products extends React.Component{

    state = {
        products: [],
    };

    componentDidMount(){
   // getallProducts()
   ProductsApi.getAll().then( data => { //getall ***> promise
    this.setState({
        products: data
    })
});

}


    render(){
    return (
    <div>
    <h1> products</h1>

    <div className="row">

    {this.state.products.map(product => 
                        <div className={'col-4'} key={product.id}>
                            <ProductItem product={product} />
                        </div>
                    )}
     
      </div>
      
  
    </div>
)
}
}
