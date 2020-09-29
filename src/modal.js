import React, { Component } from 'react'
import {ProductConsumer} from './context'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import ButtonContainer from './buttonComponent'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {

                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;


                    if(!modalOpen) {
                        return null;
                    } else {
                        return (
                        <ModalContainer>
                            <div>
                                <img src={img} />
                                <p>{title}</p>
                                <p>{price}</p>

                                <ButtonContainer
                                    onClick={() => {value.closeModal();}}> 
                                    Close
                                </ButtonContainer>
                                <ButtonContainer
                                    onClick={ () => {console.log('go to cart?');}}> 
                                    Na razie nic
                                </ButtonContainer>
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
    background: rgba(0,0,0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;


`



