import React, { Component } from 'react'
import './Navbar.scss';
import {Link} from 'react-router-dom'
import {UserConsumer} from './userContext'
import { ProductConsumer } from './context';


export default class Navbar extends Component {

    state = {
        isOpen: false,
        downMenuOpened: false,
    }

    toogleOpen = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    showDownMenu = () => {
        this.setState({downMenuOpened: !this.state.downMenuOpened});
    }

    
    render() {
        let downMenuOpened1 = (!this.state.downMenuOpened) ? "next" : "next hidden";

        return (

            <div className="topnav">

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                
                <div className="active"><Link to="/">Home</Link></div>
                

                <div>News</div>

                <div>Contact</div>

                <div className="dropdown">

                    <div className="dropbtn">
                        Dropdown
                        <i className="fa fa-caret-down"></i>
                    </div>

                    <div className="dropdown-content">
                        <div>Link 1</div>
                        <div>Link 2</div>
                        <div>Link 3</div>
                    </div>

                </div>

                <div>
                    <UserConsumer>
                        {({login, logOut}) => (
                            <div>
                                {(login === '')
                                    ?
                                        "Zaloguj sie"
                                    :
                                        "Witaj " + login
                                }
                                 
                                
                                
                                <button onClick={logOut}>Log Out</button>
                            </div>
                        )}

                    </UserConsumer>

                </div>

                <div>
                <ProductConsumer>
                    
                    {({openLeftNavbar}) => (
                        <div  onClick={openLeftNavbar}>
                            Otworz levy navbar
                        </div>
                    )}
                    
                </ProductConsumer>
                    
                    
                    




                </div>
                <div></div>
                <div className="div-cart">
                <Link to="/cart">
                    <ProductConsumer>
                    
                        {({getCart, openCart}) => (
                            <div  onClick={openCart}>
                                Razem do zaplaty: { getCart() } $
                            </div>
                        )}
                        
                    </ProductConsumer>
                    </Link>
                </div>

                <div className="icon" onClick={this.showDownMenu}>

                    &#9776;
                    
                </div>

                <div className={downMenuOpened1}>
                    czesc
                </div>

            </div>

        )
    }
}
