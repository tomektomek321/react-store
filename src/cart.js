import React, { Component } from 'react'
import CartColumns from './cartColumns'
import {ProductConsumer} from './context'
import CartList from './cartList'
import CartTotal from './cartTotal.js'


export default class Cart extends Component {
    render() {
        return (
            <section>
                <div> CART </div>
                <ProductConsumer>
                {value => {
                    //console.log(value);
                    
                    const {cart} = value;
                    if(cart.length > 0) {
                        return(
                            <React.Fragment>
                                <CartColumns />
                                <CartList cart={cart} val={value} />
                                <CartTotal value={value} />
                            </React.Fragment>

                        ) 
                    } else {
                        return <p>NIC</p>
                    }
                }}


                </ProductConsumer>
                


            </section>
        )
    }
}
