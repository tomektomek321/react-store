import React, { Component } from 'react'
import './cartTotal.scss'
export default class CartTotal extends Component {

    /*
    state = {
        cartSubTotal: this.props.value.cartSubTotal,
        tax: this.props.value.tax,
        cartTotal: this.props.value.cartTotal,
        clearCart: this.props.value.clearCart,
    }
    */
    
    render() {

        console.log(this.props);
        return (
            <div className="cartTotal">
                <div className="clearTotal">
                    <button className="btn btn-danger" onClick={() => this.props.value.clearCart()}>
                        clear cart
                    </button>
                </div>
                <div>
                    Sub  total : {this.props.value.cartSubTotal}
                </div>
                <div>
                    total : {this.props.value.cartTotal}
                </div>
            </div>
        )
    }
}
