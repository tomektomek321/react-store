import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ProductConsumer } from './context';
import NavbarCartAmount from './NavbarCartAmount'

export default class NavbarCart extends Component {

    state = {
        cartHover: false,
    };

    cartHover = (cart) => {
        if(cart.length === 0) {
            this.setState({cartHover: false});
            return;
        }

        this.setState({cartHover: !this.state.cartHover});
    }

    render() {

        const detailsDataHTML = this.props.items.map((item, index) => {

            return <div className="cart_item" key={index}>
                <div className="cart_item--image">
                    <img alt="nic" src={item['img']} />
                </div>
                <div className="cart_item--nameAmount">

                    <div className="cart_item--name">{item['title']}</div>


                    <ProductConsumer>
                        {({increment, decrement}) => (
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
                        )}
                    </ProductConsumer>



                </div>

                <div className="cart_item--price">
                    {item['price']} $
                </div>
                <ProductConsumer>
                    {({removeItem}) => (
                        <div className="cart_item--delete"  onClick={() => removeItem(item['id'])}>
                            <div className="delete_btn"><img alt="nic" src="img/delete-32.ico" /></div>
                        </div>
                    )}
                </ProductConsumer>
            </div>;
        });


        return (
            <ProductConsumer>
                {({cart, cartTotal, cartSubTotal, tax, discount, numberOfItems}) => (
                    <div className={`item item6 cartDiv ${(this.state.cartHover) ? "hov" : ""} `}
                            >
                        <div className="cartDiv_onMenu">
                            <div className="cartDiv_amount">
                                <Link to="/fullCart">
                                    <NavbarCartAmount />
                                </Link>

                            </div>
                            <div className="cartDiv_image" onMouseEnter={() => this.cartHover(cart)} onMouseLeave={() => this.cartHover(cart)}>
                                <img alt="nic"  src="img/cart-59-32.ico" />
                            </div>
                            <div className="cartDiv_price">

                                <div>
                                    {cartTotal} $
                                </div>

                            </div>
                        </div>
                        <div className="cartDiv_downListDiv">
                            <div className="cartDiv_">
                                <div className="cart_items">
                                    {detailsDataHTML}
                                </div>

                                <div className="cart_totalDiv">

                                    <div className="cart_total">
                                        <div className="cart_total--empty">
                                            {numberOfItems()} item(s) in Cart
                                        </div>
                                        <div className="cart_total--subtotal">
                                            <div>Subtotal</div>
                                            <div>
                                                {cartSubTotal} $
                                            </div>
                                        </div>
                                        <div className="cart_total--tax">
                                            <div>Taxes</div>
                                            <div>
                                                {tax} $
                                            </div>
                                        </div>
                                        <div className="cart_total--discount">
                                            <div>Discount</div>
                                            <div>
                                                {discount} %
                                            </div>
                                        </div>
                                        <div className="cart_total--total">
                                            <div>Total</div>
                                            <div>
                                                {cartTotal} $
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
                )}
            </ProductConsumer>
        )
    }
}
