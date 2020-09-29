import React, { Component } from 'react'
import {ProductConsumer} from './context'
import {Link}  from 'react-router-dom'
import ButtonContainer from './buttonComponent'
import styled from 'styled-components';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    console.log(value.detailProduct);
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;

                    return (
                        <div>
                            <img src={img} alt="dupa" />
                            <p>price: {price}</p>
                            
                                <Link to="/">
                                <ButtonContainer>
                                    Back to products
                                    </ButtonContainer>
                                </Link>
                            
                            

                            <ButtonContainer cart
                                disabled={inCart ? true : false}
                                onClick={ () => {
                                    value.addToCart(id);
                                 }} >
                                
                                {inCart ? (
                                    <span disabled>
                                        
                                        In Cart
                                    </span>
                                ) : (
                                    <span disabled>Add</span>
                                )}

                            </ButtonContainer>


                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
