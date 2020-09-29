import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
//import {ProductConsumer } from './context'


export default class Product extends Component {
    
    render() {

        const {id, title, img, price, inCart} = this.props.product;

        return (
            <ProductWrapper>
                <div className="divProduct" onClick={console.log(1)}>

                <Link to="/details">
                    <img src={img} alt="product" />
                </Link>
                <button
                    disabled={inCart ? true : false}
                    onClick={ () => {console.log("Added") }} >
                    
                    {inCart ? (
                        <p disabled>
                            {" "}
                            In Cart 
                        </p>
                    ) : (
                        <p> Add </p>
                    )}

                </button>
                



                </div>
            </ProductWrapper>
        )
    }
}



const ProductWrapper = styled.div `

`
