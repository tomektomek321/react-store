import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer } from './context'
import './Product.scss'


export default class Product extends Component {
    
    render() {

        const {id, title, img, price, inCart, guaranty} = this.props.product;

        return (
            <ProductWrapper>

                <ProductConsumer>

                {value => (

                    <div className="divProduct" onClick={() => {
                        value.handleDetail(id)
                    }}>
                        <div className="head">{title}</div>

                        <div className="productImg">
                            <Link to="/details">
                                <img src={img} alt="product" />
                            </Link>
                        </div>

                        <div className="priceAdd">
                            <div className="price">
                                price: {price} $
                                </div>

                            <div className="add">

                                    {inCart ? (

                                        <div className="added" disabled>
                                            {" "}
                                            In Cart 
                                        </div>

                                    ) : (

                                        <button
                                        disabled={inCart ? true : false}
                                        onClick={ () => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }} >
                                            Add
                                        </button>
                                    )}

                                    {guaranty ? (
                                        <div>
                                        {" "}
                                        GUARANTED 
                                    </div>
                                    ) : (
                                        <span></span>
                                    )}

                            </div>

                        </div>
                        

                        
                    </div>

                )}

                </ProductConsumer>
            </ProductWrapper>
        )
    }
}



const ProductWrapper = styled.div `

`
