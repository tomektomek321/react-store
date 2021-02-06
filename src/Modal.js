import React, { useEffect, useState } from 'react'
import './Modal.scss'
import { removeModalProduct } from './_actions/modalAction';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './_actions/cartAction';

function setCloseIcon() {
    var start = document.getElementsByClassName("divSideRight")[0];
    if(!start) return;

    let elem1, elem2, elem3;

    if(window.innerWidth > 1219) {
        elem3 = document.getElementsByClassName("divSideRight")[0];
        elem2 = document.getElementsByClassName("closeBtn")[0];

        elem2.style.top = (elem3.offsetTop - 50) + "px";
    } else {
        elem1 = document.getElementsByClassName("divSideLeft")[0];
        elem2 = document.getElementsByClassName("closeBtn")[0];
        elem2.style.top = (elem1.offsetTop + 50) + "px";
    }
}

export const Modal = () => {

    const { productDetails } = useSelector((state) => state.modal);
    const { cartItems } = useSelector((state) => state.cart);

    const added = cartItems.includes(item => item.id === productDetails.id);

    const [isAdded, setIsAdded] = useState(added);

    const dispatch = useDispatch();

    const state = {
        ram: ['4 GB', '8 GB', '12 GB', '16 GB'],
        memory: ['128 GB', '256 GB', '512 GB'],
        ramSelected: 0,
        memorySelected: 0,
    }

    const handleChange = () => {
        //
    }

    useEffect(() => {
        setCloseIcon();

    });

    const addToCart_ = () => {
        dispatch(addToCart(productDetails.id));
        setIsAdded(!isAdded);

        document.getElementsByClassName("amountCart")[0].classList.add("addingUp");
        setInterval(function() {
            document.getElementsByClassName("amountCart")[0].classList.remove("addingUp");
        }, 1000)
    }

    const removeFromCart_ = () => {
        dispatch(removeFromCart(productDetails.id));
        setIsAdded(!isAdded);
    }


    const closeModal = () => {
        dispatch(removeModalProduct());
    }

    const optsRAM = state.ram.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));

    const optsMEMORY = state.memory.map((item, index) => (
        <option key={index} value={item} onMouseEnter={() => console.log(1)}>
            {item}
        </option>
    ));

    return (productDetails != null) ?
        (<div className="modalContainer">
            {/* <div className="bgShape"></div> */}
            <div className="closeBtn" onClick={closeModal}>CLOSE</div>

            <div className="divSide divSideLeft">
                <div className="imageWrapper divSideLeft_top">
                    <img src={productDetails.img} alt="product" />
                </div>

                <div className="formWrapper divSideLeft_bottom">

                    <div className="form-group">
                        <label htmlFor="type">RAM</label>

                        <select
                            name="company"
                            id="type"
                            onChange={handleChange}
                            className="form-control"
                            value={state.ramSelected}>
                            {optsRAM}
                        </select>

                    </div>
                    <div className="form-group">
                        <label htmlFor="type">MEMORY</label>

                        <select
                            name="company"
                            id="type"
                            onChange={handleChange}
                            className="form-control"
                            value={state.memorySelected}>
                            {optsMEMORY}
                        </select>

                    </div>
                    <div className="formWrapper__priceAdd">
                        <div className="_price">
                            100 $
                        </div>
                        {/* <div className="div_price">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div> */}

                        {
                            productDetails && cartItems.find(item => item.id === productDetails.id)
                            ?
                                (<div className="_add" onClick={removeFromCart_}>REMOVE FROM CART</div>)
                            :
                                (<div className="_add" onClick={addToCart_}>ADD TO CART</div>)
                        }

                    </div>

                </div>

            </div>

            <div className="divSide divSideRight">
                <div className="wrapper">
                    <div className="title"> {productDetails.title} </div>

                    <div className="cont cont-1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>

                    <div className="cont cont-2">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                        more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of
                        the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                        1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                        written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </div>
                </div>
            </div>

        </div>)

        : null;
}

