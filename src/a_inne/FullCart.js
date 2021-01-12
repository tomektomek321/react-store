import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './FullCart.scss'
import { removeFromCart } from '../_actions/cartAction';

export default function FullCart() {
    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;

    const dispatch = useDispatch();


    const remove = (id) => {
        dispatch(removeFromCart(id));
    }
    return (
        <div>
            <h1>FULL CART </h1>

                {cartItems.length === 0
                ?
                    <div>CART IS EMPTY</div>
                :
                    <div className="fullCartDiv">
                        {console.log(cartItems)}
                        {cartItems.map( function(item, index) {
                            return (
                                <div key={index} className="cartRow">
                                    <div>{item.name}</div>
                                    <div>{item.price}</div>
                                    <div onClick={() => remove(item.product) } >REMOVE</div>
                                </div>
                            )
                        } )}

                        <div>
                            Subtotal: {cartItems.reduce( (a,c) => a + c.countInStock, 0) } items <br />
                            Subtotal: {cartItems.reduce( (a,c) => a + (c.countInStock * c.price), 0) } $
                        </div>

                    </div>
                }


        </div>
    )
}
