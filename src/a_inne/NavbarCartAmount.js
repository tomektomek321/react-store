import React from 'react'
import { useSelector } from 'react-redux'

export default function NavbarCartAmount() {

    const cart = useSelector((state) => state.cart );

    const { cartItems } = cart;



    return (
        <div>
            { cartItems.length }
        </div>
    )
}
