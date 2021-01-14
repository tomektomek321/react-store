import React, { useState } from 'react'
//import { Link } from 'react-router-dom';

import './Product.scss'
import './Product_RWD.scss'
import './Product_DetailsInfo.scss'
import './AddBtn.scss'
import { addToCart, removeFromCart } from '../_actions/cartAction';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsInfo } from './DetailsInfo';

export default function ProductFunc(props) {
    const {cartItems} = useSelector((state) => state.cart);
    //console.log(cartItems);
    //console.log(props);
    const x = cartItems.filter(a => a.id === props.product.id);
    //console.log(x);
    const [mainDivHov, setMinDivHover] = useState((x.length > 0) ? "divProduct hov" : "divProduct hov");


    const dispatch = useDispatch();
    function productHover(bool) {
        if(bool === null) {
            if(!cartItems.find(a => a.id === props.product.id)) {
                if(mainDivHov === "divProduct") {
                    setMinDivHover("divProduct hov")
                } else {
                    setMinDivHover("divProduct")
                }
            }

            return;
        }

        if(cartItems.find(a => a.id === props.product.id)) {
            setMinDivHover("divProduct hov")
        }else if(bool) {
            setMinDivHover("divProduct hov")
        } else {
            setMinDivHover("divProduct")
        }

    }

    const {id, title, img, price, inCart} = props.product;



    const imgClass = (true) ? "productImg" : "productImg hidden" ;

     //const detailsShowed1 = (detailsShowed) ? "detailsShowed" : "" ;
    //console.log(props);
    function isAdded() {
        if(cartItems.find(a => a.id === props.product.id)) {
            return true;
        } else {
            return false;
        }
    }
    //console.log(props);
    function addToCart_() {
        console.log(props.product);
        dispatch(addToCart(props.product.id));
    }

    function removeItem(id) {
        dispatch(removeFromCart(id));
    }


    /*const detailsData = [
        ['Prozessor', 'Exynos 9820'],
        ['Prozessor-Taktfrequenz', '2.7 GHz + 2.3 GHz + 1.9 GHz Octa-Core'],
        ['Betriebsystem', 'Android 9'],
        ['Speicherkapazität', '128GB'],
        ['Steckplatz für Speicherkarten', 'Ja'],
        ['Speicherkartenformat', 'Micro-SD'],
        ['Arbeitsspeicher-Größe', '8GB'],
        ['Auflösung (HxB)', '3.040 x 1.440 Pixel'],
        ['Front-Kamera Auflösung', '10 Megapixel'],
        ['Abmessungen (B/H/T) / Gewicht', '70.4 mm x 149.9 mm x 7.8 mm / 157 g'],
    ];

    const detailsDataHTML = detailsData.map((item, index) => {
        return <div className="details_item" key={index}>
            <div className="details_item--name">
                {item[0]}
            </div>
            <div className="details_item--value">
                {item[1]}
            </div>
        </div>;
    });*/

    return (
        <div className="cartProductDiv">
            {/* ${detailsShowed1} */}
        <div  className={`divProduct_front `}>
            {/* make tap and not redirect, just show  */}
            <div className={` ${mainDivHov} `}  onMouseEnter={() => productHover(true)} onMouseLeave={() => productHover(false)}>

                <div className="head">{title}</div>
                <div className={`bgAddedColor ${isAdded(id) ? 'x' : 'y'}`}></div>

                {/* <div className={imgClass} onClick={() => openModal(id) }> */}
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
                            Price: {price} $
                    </div>

                </div>

                <DetailsInfo />

            </div>

        </div>

        {/* <div className={`divProduct_back `} onMouseLeave={showDetails}>

            <div className="divProduct_back_content">

                <div className="details_header">Technische Merkmale</div>

                {detailsDataHTML}

            </div>

        </div> */}



    </div>
    )
}
