import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import './LeftNavbar.scss'

export default class LeftNavbar extends Component {
    render() {







        return (
            <ProductConsumer>
                {({leftNavbarOpen, modalProduct}) => {
                    let klasa = (leftNavbarOpen) ? "leftNavbar showed" : "leftNavbar";
                    const {img, title} = modalProduct;

                        //console.log(5);
                        return (
                            <div className={klasa}>

                                <div className="header"> {title}</div>

                                <div className="photo">

                                    <img src={img} alt="product" />

                                </div>

                            </div>

                        );


                }}

            </ProductConsumer>
        )
    }
}







