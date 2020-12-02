import React, { Component } from 'react'
import {storeProducts, detailProduct} from './TodoDB';


const productContext = React.createContext();



class ProductProvider extends Component {

    state = {

        products: [],
        caruselSelected: 0,
        filteredProducts: [],
        //detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        leftNavbarOpen: false,
        cartOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: (0).toFixed(2),
        tax: 0,
        cartTotal: (0).toFixed(2),
        discount: 0,
        guaranty: 'all',
        company: 'all',
        price: 0,
        minPrice: 0,
        maxPrice: 0,

    }

    componentDidMount() {
        this.setProducts();
        /*let _t = this;
        setInterval(function() {
            _t.changeCarusel();
        }, 6000);*/
    }

    changeCarusel = () => {

        let nr = this.state.caruselSelected;
        nr = (nr === 2) ? 0 : nr + 1;

        //console.log(nr);
        this.setState({caruselSelected: nr});
    }

    setProducts = () => {

        let temp = [];
        storeProducts.forEach(item => {
            const singleIt = {...item};
            temp = [...temp, singleIt];
        });

        let min = Math.min(...temp.map(item => item.price));
        let max = Math.max(...temp.map(item => item.price));

        this.setState(() => {
            return {products: temp, minPrice: min, maxPrice: max, price: max, filteredProducts: temp};
        });
    }

    handleDetail = (id) => {
        //console.log("hello");
        const product = this.getItem(id);
        this.setState( ()=> {
            return { detailProduct: product }
        })
    }

    openLeftNavbar = () => {
        return;/*
        this.setState({
            leftNavbarOpen: !this.state.leftNavbarOpen
        });*/
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState(
            {modalProduct: product, modalOpen: true}
        )
    }

    closeModal = () => {
        this.setState(
             {modalOpen: false}
        )
    }

    openCart = () => {
        this.setState(() => {
            return {cartOpen: !this.state.cartOpen}
        })
    }

    closeCart = () => {
        this.setState(() => {
            return {cartOpen: false}
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
        });
        console.log(this.state.cart);

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
        //console.log("hello add cart ", id);
        let tempProducts = [...this.state.products];

        const index = tempProducts.indexOf(this.getItem(id));

        const product = tempProducts[index];
        console.log(product);

        product.inCart = true;
        product.count++;
        const price = product.price;
        product.total = price * product.count;

        this.setState(() => {
            return {products: tempProducts, cart: [...this.state.cart, product]};
        }, () => {
            this.addTotals();
        });

        console.log(this.state);
    }

    getCart = () => {
        let price = 0;
        this.state.cart.map(item => price += item.price);

        return price;
    }

    tester = () => {
        //console.log("state product ", this.state.products[0].inCart);
        //console.log("data product ", storeProducts[0].inCart);
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id ===id);
        return product;
    }

    isAdded = (id) => {
        return this.state.cart.find(item => item.id ===id);
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => subTotal += item.total);

        let _discount = 0;

        if(subTotal > 40) { _discount = 0.1;}
        else if(subTotal > 20) { _discount = 0.05;}

        let _tax = (subTotal * 0.13).toFixed(2);

        let _cartTotal = (subTotal + _tax * ( 1 - _discount)).toFixed(2);


        this.setState({
            cartSubTotal: subTotal,
            cartTotal: _cartTotal,
            tax: _tax,
            discount: _discount
        });

    }

    numberOfItems = () => {
        let nr = 0;
        return nr = this.state.cart.map(item => nr += item.count);
    }

    handleChange = (event) => {
        //console.log( event.target.id);
        let resp;

        resp = event.target.type === "radio" ? event.target.checked : event.target.value;

        if(event.target.type === "radio" && event.target.id === "customRadio1") {
            resp = true;
        } else if(event.target.type === "radio" && event.target.id === "customRadio2") {
            resp = false;
        } else if(event.target.type === "radio" && event.target.id === "customRadio3") {
            resp = "all";
        }
        //console.log(value);
        /*const name = event.target.name;

        console.log(name);
        console.log(value);*/

        this.setState({
            [event.target.name]: resp
        }, this.filterPhones )
    }

    filterPhones = () => {
        let {products, company, guaranty, price} = this.state;
        //console.log(guaranty);
        let tempProd = [...products];

        if(company !== 'all') {
            tempProd = tempProd.filter(item => item.company === company);
        }

        if (guaranty === true) {
            tempProd = tempProd.filter(room => room.guaranty === true);
        }

        if (guaranty === false) {
            tempProd = tempProd.filter(room => room.guaranty === false);
        }

        tempProd = tempProd.filter(room => room.price <= price);





        this.setState({
            filteredProducts: tempProd
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
                handleChange: this.handleChange,
                getCart: this.getCart,
                openCart: this.openCart,
                closeCart: this.closeCart,
                openLeftNavbar: this.openLeftNavbar,
                isAdded: this.isAdded,
                numberOfItems: this.numberOfItems,
            }}>
                {this.props.children}
            </productContext.Provider>
        )
    }


}


const ProductConsumer = productContext.Consumer;

export {ProductProvider, ProductConsumer, productContext};