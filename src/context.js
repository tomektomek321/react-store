import React, { Component } from 'react'
import {storeProducts, detailProduct} from './TodoDB';

const productContext = React.createContext();



class ProductProvider extends Component {

    state = {
        products: storeProducts,
        detailProduct: detailProduct,
    }

    handleDetail = () => {
        console.log("hello");
    }

    addToCart = (id) => {
        console.log("hello add cart ", id);
    }

    tester = () => {
        console.log("state product ", this.state.products[0].inCart);
        console.log("data product ", storeProducts[0].inCart);
    }

    render() {
        return (
            <productContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </productContext.Provider>
        )
    }
}


const ProductConsumer = productContext.Consumer;

export {ProductProvider, ProductConsumer};