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

    const [mainDivHov, setMinDivHover] = useState((x.length > 0) ? "cl" : "");


    const dispatch = useDispatch();
    function productHover(bool) {
        if(bool === null) {
            if(!cartItems.find(a => a.id === props.product.id)) {
                if(mainDivHov === "cl") {
                    setMinDivHover("")
                } else {
                    setMinDivHover("hov")
                }
            }

            return;
        }

        if(cartItems.find(a => a.id === props.product.id)) {
            setMinDivHover("cl")
        }else if(bool) {
            setMinDivHover("hov")
        } else {
            setMinDivHover("")
        }

    }

    const {id, title, img, price, inCart} = props.product;



    const imgClass = (true) ? "productImg" : "productImg hidden" ;

    function isAdded() {
        if(cartItems.find(a => a.id === props.product.id)) {
            return true;
        } else {
            return false;
        }
    }

    function addToCart_() {

        dispatch(addToCart(props.product.id));
    }

    function removeItem(id) {
        dispatch(removeFromCart(id));
    }

    return (
        <div className="cartProductDiv">

        <div  className={`divProduct_front `}>

            <div className={`divProduct ${mainDivHov} `}  onMouseEnter={() => productHover(true)} onMouseLeave={() => productHover(false)}>

                <div className="head">{title}</div>
                <div className={`bgAddedColor ${isAdded(id) ? 'x' : 'y'}`}></div>

                <div className={imgClass}  onClick={()=> productHover(null)}>
                        <img src={img} alt="product" />
                </div>

                <div className={`btnCart ${isAdded(id) ? 'added' : ''}`}
                    disabled={inCart ? true : false}>


                    {isAdded(id) ? (
                        <div className="name added">In Cart</div>
                    ) : (
                        <div className="name" onClick={addToCart_} >Do koszyka</div>
                    )}

                    <div className={`image ${isAdded(id) ? 'added' : ''}`}>
                        <img alt="nic" src="img/cart-59-32.ico" />
                    </div>

                </div>


                <div className={`removeBtn ${isAdded(id) ? 'added' : ''}`} onClick={() => removeItem(id)}>
                    <img src="img/delete-32.ico" alt="product" />
                </div>

                <div className="priceDiv">

                    <div className="btnPrice">
                            {price.toFixed(2)} $
                    </div>

                </div>

                <DetailsInfo />

            </div>

        </div>

    </div>
    )
}
