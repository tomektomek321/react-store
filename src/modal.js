import React, { Component } from 'react'
import {ProductConsumer} from './context'
import styled from 'styled-components'
//import {Link} from 'react-router-dom'
import ButtonContainer from './buttonComponent'
import './Modal.scss'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {

                    const {modalOpen} = value;
                    const {img, title} = value.modalProduct;


                    if(!modalOpen) {
                        return null;
                    } else {
                        return (
                        <ModalContainer>
                            <div className="divProduct">

                            <div className="head">{title}</div>

                            <div className="productImg">

                                <img src={img} alt="product" />

                            </div>

                            <div className="priceAdd">

                                <div className="price">
                                    <ButtonContainer back
                                        onClick={() => {value.closeModal();}}> 
                                        Back to shopping
                                    </ButtonContainer>
                                </div>

                                <div className="add">

                                        
                                    <ButtonContainer
                                        onClick={ () => {console.log('go to cart?');}}> 
                                        Go to cart
                                    </ButtonContainer>

                                </div>

                            </div>


                            </div>
                            

                        </ModalContainer> )
                    }

                }}



            </ProductConsumer>
        )
    }
}



const ModalContainer = styled.div `
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;


`



