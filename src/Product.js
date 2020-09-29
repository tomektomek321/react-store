import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer } from './context'


export default class Product extends Component {
    
    render() {

        const {id, title, img, price, inCart} = this.props.product;

        return (
            <ProductWrapper>

                <ProductConsumer>

                {value => (

                    <div className="divProduct" onClick={() => {
                        value.handleDetail(id)
                    }}>
                        <div>{title}</div>

                        <Link to="/details">
                            <img src={img} alt="product" />
                        </Link>
                        <button
                            disabled={inCart ? true : false}
                            onClick={ () => {
                                value.addToCart(id);
                                value.openModal(id);
                             }} >
                            
                            {inCart ? (
                                <p disabled>
                                    {" "}
                                    In Cart 
                                </p>
                            ) : (
                                <p> Add </p>
                            )}

                        </button>
                        <div>{price}</div>
                    </div>

                )}

                </ProductConsumer>
            </ProductWrapper>
        )
    }
}



const ProductWrapper = styled.div `

`
