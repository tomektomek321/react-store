import React, { Component } from 'react'
import './cartItem.scss';



export default class CartItem extends Component {


    state = {
        it: this.props.item,
        cart: this.props.value
    }

    /* <span> <img src={this.state.it.img} /> </span> */ 
    
    render() {
        //console.log(this.state);
        //console.log(this.props.item);
        return (
            <tr>
                <td>{this.state.it['title']}</td>
                <td> {this.state.it['price']} </td>
                <td className="quantity">
                    <span onClick={()=> this.state.cart.decrement(this.state.it.id)}>
                    <button className="btn btn-outline-success">-</button> 
                    </span>
                    <span>
                        <button className="btn btn-outline-success">{this.state.it['count']}</button> 
                    </span>
                    <span onClick={()=> this.state.cart.increment(this.state.it.id)}>
                    <button className="btn btn-outline-success">+</button> 
                    </span>
                </td>
                <td onClick={()=> this.state.cart.removeItem(this.state.it.id)}>
                    <button className="btn btn-danger">remove</button>  
                </td>
                <td> {this.state.it['total']} </td>

                

                
            </tr>
        )

    }


}


