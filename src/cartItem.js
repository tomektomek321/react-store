import React, { Component } from 'react'



export default class CartItem extends Component {


    state = {
        it: this.props.item,
        cart: this.props.value
    }

    /* <span> <img src={this.state.it.img} /> </span> */ 

    render() {
        //console.log(this.state);
        
        return (
            <div>
                <span>{this.state.it['title']}</span>
                <span> {this.state.it['price']} </span>
                <span>

                    <span onClick={()=> this.state.cart.decrement(this.state.it.id)}> - </span>
                    <span> {this.state.it['count']} </span>
                    <span onClick={()=> this.state.cart.increment(this.state.it.id)}> + </span>
                    <span onClick={()=> this.state.cart.removeItem(this.state.it.id)}> remove </span>
                    <span> total: {this.state.it.total} </span>

                </span>
            </div>
        )

    }


}


