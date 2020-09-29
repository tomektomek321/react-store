import React, { Component } from 'react'
import CartItem from './cartItem'
import { ProductConsumer } from './context'

export default class CartList extends Component {

    state = {
        data: this.props.cart,
        ProductConsumer: this.props.val
    }
    render() {

        //console.log(this.state)
        return (
            <div>
                {this.state.data.map(item => {
                    return <CartItem key={item.id} value={this.state.ProductConsumer} item={item} />
                })}
            </div>
        )
    }
}
