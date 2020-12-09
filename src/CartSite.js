import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from './_actions/cartAction';

export default function CartSite(props) {
    const id = props.match.params.id;

    const qty = props.location.search?  Number(props.location.search.split("=")[1]) : 1;

    const dispatch = useDispatch();

    useEffect( () => {

        if(id) {
            dispatch(addToCart(id, 1));
        }

    }, [dispatch, id]);




    return (
        <div>
            <h1>Cart screen</h1>
            <p> ADD TO CART : PROD_ID: {id} Qty: {qty}  </p>
        </div>
    )
}
