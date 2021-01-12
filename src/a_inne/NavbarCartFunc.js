import React, { useState } from 'react'
import './NavbarCartFunc.scss'
import NavbarCartAmount from './NavbarCartAmount'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllFromCart } from './_actions/cartAction';

export default function NavbarCartFunc() {

    const dispatch = useDispatch();

    const [cartHov, setCartHov] = useState(false);

    const cart = useSelector((state) => state.cart );

    //const removeAllFromCart = useSelector((state) => state.removeAllFromCart);

    const { cartItems } = cart;
    //console.log(cartItems);

    function decrement() {}
    function increment() {}

    function removeItem() {
        dispatch(removeAllFromCart());
    }

    const detailsDataHTML = cartItems.map((item, index) => {

        return <div className="cart_item" key={index}>
            <div className="cart_item--image">
                <img alt="nic" src={item['image']} />
            </div>
            <div className="cart_item--nameAmount">

                <div className="cart_item--name">{item['name']}</div>

                    <div className="cart_item--count">
                        <div className="decrement" onClick={() => decrement(item['product'] || 1 )}>
                        -
                        </div>
                        <div className="count">
                            1
                        </div>
                        <div className="increment" onClick={() => increment(item['product'] || 1)}>
                            +
                        </div>
                    </div>



            </div>

            <div className="cart_item--price">
                {item['price']} $
            </div>
                <div className="cart_item--delete"  onClick={() => removeItem()}>
                    <div className="delete_btn"><img alt="nic" src="img/delete-32.ico" /></div>
                </div>
        </div>;
    });


    return (
        <div className={`item item6 cartFunc   ${cartHov ? 'hov' : ''} `}
            onMouseEnter={() => setCartHov(true)} onMouseLeave={() => setCartHov(false)}>

        <div className="cartDivFunc_onMenu">
            <div className="cartDiv_amount">
                <Link to="/fullCart">
                    <NavbarCartAmount />
                </Link>

            </div>
            <div className="cartDiv_image">
                <img alt="nic"  src="img/cart-59-32.ico" />
            </div>
            <div className="cartDiv_price">

                <div>
                    {(cartItems.reduce( (a,c) => a + (1 * c.price), 0)).toFixed(2) } $
                </div>

            </div>
        </div>
        <div className={`cartDiv_downListDiv`}>
            <div className="cartDiv_">
                <div className="cart_items">
                    {detailsDataHTML}
                </div>

                <div className="cart_totalDiv">

                    <div className="cart_total">
                        <div className="cart_total--empty">
                            1 item(s) in Cart
                        </div>
                        <div className="cart_total--subtotal">
                            <div>Subtotal</div>
                            <div>
                                1 $
                            </div>
                        </div>
                        <div className="cart_total--tax">
                            <div>Taxes</div>
                            <div>
                                1 $
                            </div>
                        </div>
                        <div className="cart_total--discount">
                            <div>Discount</div>
                            <div>
                                1 %
                            </div>
                        </div>
                        <div className="cart_total--total">
                            <div>Total</div>
                            <div>
                                1 $
                            </div>
                        </div>
                        <div className="cart_total--btnBuy">
                            BUY
                        </div>
                    </div>
                </div>
            </div>

        </div>


        </div>
    )
}
