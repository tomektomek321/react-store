import React, { Component } from 'react'
import {ProductConsumer} from './context'
import './LeftNavbar.scss'

export default class LeftNavbar extends Component {
    render() {


        




        return (
            <ProductConsumer>
                {({leftNavbarOpen}) => {
                    let klasa = (leftNavbarOpen) ? "leftNavbar showed" : "leftNavbar";
                
                        console.log(5);
                        return (
                            <>
                                <div className={klasa}>
    
                                <div>MENU !!</div>
                                <div>MENU !!</div>
                                <div>MENU !!</div>
                                <div>MENU !!</div>
                                <div>MENU !!</div>
                                <div>MENU !!</div>
                                <div>MENU !!</div>
                                <div>MENU !!</div>
                                <div>MENU !!</div>
                                <div>MENU !!</div>
                                <div>MENU !!</div>
                                <div>MENU !!</div>
                                <div>MENU !!</div>
                                <div>MENU !!</div>
                                <div>MENU !!</div>
                                
                                </div>
                                
                            </> 
                        );
                    

                }}

            </ProductConsumer>
        )
    }
}







