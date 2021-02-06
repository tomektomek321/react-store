import React, { useState } from 'react'
import './Product.scss'
import './Product_RWD.scss'
import './Product_DetailsInfo.scss'
import './BgMoveColor.scss'
import './AddBtn.scss'
import { addToCart, removeFromCart } from '../_actions/cartAction';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsInfo } from './DetailsInfo';

export default function ProductFunc(props) {
    const {cartItems} = useSelector((state) => state.cart);
    const x = cartItems.filter(a => a.id === props.product.id);

    const [mainDivHov, setMinDivHover] = useState("");

    const dispatch = useDispatch();
    function productHover(bool) {

        if(cartItems.find(a => a.id === props.product.id) === undefined) {
            if(bool) {
                setMinDivHover("hov")
            } else {
                setMinDivHover("")
            }
        }

    }

    const {id, title, img, price, inCart} = props.product;

    const imgClass = (true) ? "productImg" : "productImg hidden" ;

    let mainDivCl_css;

    if(x.length > 0) {
        mainDivCl_css = "cl";
    } else {
        mainDivCl_css = "";
    }

    function isAdded() {
        if(cartItems.find(a => a.id === props.product.id)) {
            return true;
        } else {
            return false;
        }
    }

    function addToCart_() {

        dispatch(addToCart(props.product.id));
        setMinDivHover("");
    }

    function removeItem(id) {
        dispatch(removeFromCart(id));
        setMinDivHover("hov");
    }

    return (
        <div className="cartProductDiv">

        <div  className={`divProduct_front `}>

            <div className={`divProduct ${mainDivHov}  ${mainDivCl_css} `}  onMouseEnter={() => productHover(true)} onMouseLeave={() => productHover(false)}>

                <div className="head">{title}</div>
                <div className={`bgAddedColor`}></div>

                <div className={imgClass}>
                        <img src={img} alt="product" />
                </div>

                <div className={`btnCart`}
                    disabled={inCart ? true : false}>


                    {isAdded(id) ? (
                        <div className="name added">In Cart</div>
                    ) : (
                        <div className="name" onClick={addToCart_} >Do koszyka</div>
                    )}

                    <div className={`image`}>
                        <img alt="nic" src="img/cart-59-32.ico" />
                    </div>

                </div>


                <div className={`removeBtn`} onClick={() => removeItem(id)}>
                    <img src="img/delete-32.ico" alt="product" />
                </div>

                <div className="priceDiv">

                    <div className="btnPrice">
                            {price.toFixed(2)} $
                    </div>

                </div>

                <DetailsInfo id={id} />

            </div>

        </div>

    </div>
    )
}
