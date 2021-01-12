import React, { Component } from 'react'
import CartColumns from './cartColumns'
import {ProductConsumer} from '../context'
import CartList from './cartList'
import CartTotal from './cartTotal.js'


export default class Cart extends Component {
    render() {
        return (
            <section>
                <div className="container">
                <div className="card bg-dark  text-white rounded">


                <div className="card-header">CART</div>
                <div className="card-body">
                <ProductConsumer>
                {value => {
                    //console.log(value);

                    const {cart} = value;
                    if(cart.length > 0) {
                        return(
                            <React.Fragment>

                                <table className="table  table-dark">


                                        <CartColumns />


                                    <tbody>

                                        <CartList cart={cart} val={value} />
                                    </tbody>


                                </table>
                                <CartTotal value={value} />
                            </React.Fragment>

                        )
                    } else {
                        return <p>NIC</p>
                    }
                }}


                </ProductConsumer>

                </div>
                </div>
                </div>
            </section>
        )
    }
}
