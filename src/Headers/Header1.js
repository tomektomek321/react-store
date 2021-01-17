import React, { useState } from 'react'
import './Header2.scss'
import { useSelector } from 'react-redux'
import Cart from './Cart'

export const Header1 = () => {

    const cart = useSelector((state) => state.cart);

    const { cartItems } = cart;

    const [cartHover, setCartHover] = useState(false);



    const cartHoverF = (cart) => {

        if(cart.length === 0) {
            setCartHover(false);
            return;
        }

        setCartHover(!cartHover);
    }

    return (
        <header className="l-header" id="header">
            <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>
            <nav className="nav bd-container">
                <a href="/" className="nav__logo">TomekSite</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link active-link">Home</a></li>
                        <li className="nav__item"><a href="#share" className="nav__link">Phones</a></li>

                        <li className={`nav__item nav__item_cart ${(cartHover) ? "hov" : ""} `}  onClick={() => cartHoverF(cartItems)}>
                            <div className={`item item6 cartDiv ${(cartHover) ? "hov" : ""} `}>

                                <div className="cartDiv_onMenu">
                                    <div className="amountCart">{ cartItems.length }</div>
                                    <a href="#decoration" className="nav__link">Cart</a>
                                </div>

                            </div>
                        </li>

                        <li className="nav__item"><a href="#accessory" className="nav__link">Footer</a></li>


                        <li><i className='bx bx-toggle-left change-theme' id="theme-button"></i></li>
                    </ul>
                </div>

                <Cart hovF={cartHoverF} hov={cartHover} />

                <div className="nav__toggle" id="nav-toggle">
                    <div className="amountCart"
                        onClick={() => cartHoverF(cartItems)}>
                            { cartItems.length }
                    </div>
                    <i onClick={() => cartHoverF(cartItems)} className='bx bx-cart'></i>
                    <i className='bx bx-grid-alt'></i>
                </div>




            </nav>
            <script type="text/javascript" src="./main.js"></script>
        </header>
    )
}
