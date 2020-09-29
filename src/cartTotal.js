import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { ProductConsumer } from './context'


export default class CartTotal extends Component {

    state = {
        cartSubTotal: this.props.value.cartSubTotal,
        tax: this.props.value.tax,
        cartTotal: this.props.value.cartTotal,
        clearCart: this.props.value.clearCart,
    }
    render() {

        console.log(this.state);
        return (
            <div>
                <div>
                    <Link to="/" ><button>main site</button></Link>
                </div>
                <div>
                    <button onClick={() => this.state.clearCart()}>
                        clear cart
                    </button>
                </div>
                <div>
                    Sub  total : {this.state.cartSubTotal}
                </div>
                <div>
                    total : {this.state.cartTotal}
                </div>
                <div>
                    tax : {this.state.tax}
                </div>
            </div>
        )
    }
}
