import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer } from './context'
import './Product.scss'


export default class Product extends Component {

    state = {
        photoShowed: true,
        mainDivHover: false,
    }
    
    hidePhoto = () => {     this.setState({ photoShowed: !this.state.photoShowed }); }
    mainDivHov = () => {    this.setState({ mainDivHover: !this.state.mainDivHover }); }

    render() {

        const {id, title, img, price, inCart, guaranty} = this.props.product;

        let imgClass = (this.state.photoShowed) ? "productImg" : "productImg hidden" ;
        let hovDiv = (this.state.mainDivHover) ? "divProduct hov" : "divProduct" ;

        return (
            <ProductWrapper>

                <ProductConsumer>

                {value => (

                    <div className={hovDiv}  onMouseEnter={this.mainDivHov} onMouseLeave={this.mainDivHov} 
                        onClick={() => { value.handleDetail(id) }}>

                        <div className="head" onClick={this.hidePhoto}>{title}. UKRYJ</div>

                        <div className={imgClass}>
                            <Link to="/details">
                                <img src={img} alt="product" />
                            </Link>
                        </div>

                        <div className="priceAdd ">
                            <div className="price">
                                price: {price} $
                                </div>

                            <div className="add">

                                    {inCart ? (

                                        <div className="added" disabled>
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
