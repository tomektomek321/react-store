import React, { Component } from 'react'
import {storeProducts, detailProduct} from './TodoDB';


const productContext = React.createContext();



class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        tax: 0,
        cartTotal: 0,



    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let temp = [];
        storeProducts.forEach(item => {
            const singleIt = {...item};
            temp = [...temp, singleIt];
        });
        this.setState(() => {
            return {products: temp};
        });
    }

    handleDetail = (id) => {
        console.log("hello");
        const product = this.getItem(id);
        this.setState( ()=> {
            return {detailProduct: product}
        })
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct: product, modalOpen: true}
        })
    }

    closeModal = id => {
        this.setState(() => {
            return {modalOpen: false}
        })
    }

    increment = (id) => {
        let tempCart = [...this.state.cart];

        const selectedPr = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedPr);
        const pr = tempCart[index];

        pr.count = pr.count + 1;
        pr.total = pr.count * pr.price;

        this.setState(() => {
            return {cart: [...tempCart]}
        }, () => {
            this.addTotals();
        })
        
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];

        const selectedPr = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedPr);
        const pr = tempCart[index];

        pr.count = pr.count - 1;

        if(pr.count === 0) {
            this.removeItem(id);
            return;
        }


        pr.total = pr.count * pr.price;

        this.setState(() => {
            return {cart: [...tempCart]}
        }, () => {
            this.addTotals();
        })
        
        
    }

    removeItem = (id) => {
        let tempPr = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempPr.indexOf(this.getItem(id));
        let removedPr = tempPr[index];

        removedPr.inCart = false;
        removedPr.count = 0;
        removedPr.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempPr]
            }
        }, () => {
            this.addTotals();
        })
        
    }

    clearCart = () => {
        this.setState(() => {
            return {cart: []}
        }, () => {
            this.setProducts();
            this.addTotals();
        })
        
    }

    addToCart = (id) => {
        console.log("hello add cart ", id);
        let tempProducts = [...this.state.products];

        const index = tempProducts.indexOf(this.getItem(id));

        const product = tempProducts[index];

        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return {products: tempProducts, cart: [...this.state.cart, product]};
        }, () => {
            this.addTotals();
        })

    }

    tester = () => {
        console.log("state product ", this.state.products[0].inCart);
        console.log("data product ", storeProducts[0].inCart);
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id ===id);
        return product;
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => subTotal += item.total);
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;

        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                tax: tax,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <productContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
            }}>
                {this.props.children}
            </productContext.Provider>
        )
    }
}


const ProductConsumer = productContext.Consumer;

export {ProductProvider, ProductConsumer};