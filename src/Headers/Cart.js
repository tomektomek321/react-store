import React from 'react'
import { addToCart, removeFromCart, removeAllFromCart } from '../_actions/cartAction';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.scss'

export default function Cart(props) {

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    const { cartItems } = cart;



    const increment = (id) => {
        dispatch(addToCart(id));
    }

    const decrement = (id) => {
        dispatch(removeFromCart(id));
    }

    const removeAllItems = () => {
        dispatch(removeAllFromCart());
    }

    const removeItem = (id) => {
        dispatch(removeFromCart(id));
    }


    const getSubPrice = () => {
        let x = 0;

        cartItems.forEach(function(item, index) {
            x = (x + item.price) * item.count;
        })

        return x.toFixed(2);
    }


    const getFullPrice = () => {
        let x = getSubPrice();

        x = x * 1.05;

        return x.toFixed(2);


    }

    const detailsDataHTML = cartItems && cartItems.map((item, index) => {

        return <div className="cart_item" key={index}>
            <div className="cart_item--image">
                <img alt="nic" src={item['img']} />
            </div>
            <div className="cart_item--nameAmount">

                <div className="cart_item--name">{item['title']}</div>

                    <div className="cart_item--count">
                        <div className="decrement" onClick={() => decrement(item['id'])}>
                        -
                        </div>
                        <div className="count">
                            {item['count']}
                        </div>
                        <div className="increment" onClick={() => increment(item['id'])}>
                            +
                        </div>
                    </div>



            </div>

            <div className="cart_item--price">
                {item['price']} $
            </div>
                <div className="cart_item--delete"  onClick={() => removeItem(item['id'])}>
                    <div className="delete_btn"><img alt="nic" src="img/delete-32.ico" /></div>
                </div>
        </div>;
    });


    return (

        <li className={`nav__menu__cart ${(props.hov) ? "hov" : ""} `} >
            <div className={`item item6 cartDiv ${(props.hov) ? "hov" : ""} `}>
                <div className="cartDiv_onMenu">
                    <div className="title"> Cart </div>


                    <div className="cartDiv_downListDiv">
                        <div className="cartDiv_">
                            <div className="cart_items">
                                {detailsDataHTML}
                            </div>

                            <div className="cart_totalDiv">

                                <div className="cart_total">
                                    <div className="cart_total--empty">
                                        {cartItems.length} item(s) in Cart /

                                            <span className="removeAll"
                                                onClick={() => removeAllItems()  }> Remove all items
                                            </span>
                                    </div>
                                    <div className="cart_total--subtotal">
                                        <div>Subtotal</div>
                                        <div>
                                            {getSubPrice()} $
                                        </div>
                                    </div>
                                    <div className="cart_total--tax">
                                        <div>Taxes</div>
                                        <div>
                                            5%
                                        </div>
                                    </div>
                                    <div className="cart_total--discount">
                                        <div>Discount</div>
                                        <div>
                                            0 %
                                        </div>
                                    </div>
                                    <div className="cart_total--total">
                                        <div>Total</div>
                                        <div>
                                        {getFullPrice()} $
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

            </div>
        </li>

    )

}
