import React, { Component } from 'react'
import './Navbar.scss';
import './Navbar_RWD.scss';
import { Link } from 'react-router-dom'
//import { UserConsumer } from './userContext'
import { ProductConsumer } from './context';
import NavbarBigMenu from './Navbar_bigMenu';
import NavbarCart from './Navbar_cart';
import NavbarLogging from './NavbarLogging';
import NavbarBgImage from './NavbarBgImage';


export default class Navbar extends Component {

    state = {
        isOpen: false,
        downMenuOpened: false,
        selected: 'home',
        beforeDropDown: '',
        cartHover: false,
        caruselShowed: 0,
        caruselTitles: [
            'Check our products',
            'See our clients',
            'Find Us',
            'Contact Us'
        ]
    }


    //const cart = useSelector((state) => state.cart);
    //const { cartItems } = cart;

    toogleOpen = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    showDownMenu = () => {
        this.setState({downMenuOpened: !this.state.downMenuOpened});
    }

    selectSite = (name) => {
        if(this.state.beforeDropDown !== '') {
            name = this.state.beforeDropDown;
            this.setState({beforeDropDown: ''});
        } else if(name === "dropDown") {
            this.setState({beforeDropDown: this.state.selected});
        }  else if(name === "dropDown2") {
            this.setState({beforeDropDown: this.state.selected});
        }


        this.setState({selected: name});
    }

    //componentDidMount() {
    //    this.logRef.current.focus();
    //}
    //  ref={this.logRef}

    render() {


        return (
        <div className="mainBg">
            <div className="topnav">

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                <div className={`
                    slide
                    ${('home' === this.state.selected) ? "slide200" : ""}
                    ${('inneRzeczy' === this.state.selected) ? "slide400" : ""}
                    ${('dropDown' === this.state.selected) ? "slide600" : ""}
                    ${('dropDown2' === this.state.selected) ? "slide800" : ""}
                `}>

                </div>

                <div className={`logo `}><Link to="/">BestCompany</Link></div>


                <div className={`item item1 ${('home' === this.state.selected) ? 'active' : ''}`} onClick={() => this.selectSite('home')}><Link to="/">Home</Link></div>
                <div className={`item item2 ${('inneRzeczy' === this.state.selected) ? 'active' : ''}`} onClick={() => this.selectSite('inneRzeczy')}>Inne Rzeczy</div>

                <div className={`item item3
                        ${('dropDown' === this.state.selected) ? 'active' : ''} `}
                        onMouseEnter={() => this.selectSite('dropDown')}
                        onMouseLeave={() => this.selectSite('dropDown')}>

                    <div className="dropdown">

                        Dropdown
                        <i className="fa fa-caret-down ml-2"></i>

                        <div className="dropdown-content">
                            <div className="cont">
                                <div className="it">Jakies inne menu</div>
                                <div className="it">Jakies inne menu</div>
                                <div className="it">Jakies inne menu</div>
                                <div className="it">Jakies inne menu</div>
                                <div className="it">Jakies inne menu</div>
                            </div>

                        </div>


                    </div>
                </div>


                <div className={`item item4
                        ${('dropDown2' === this.state.selected) ? 'active' : ''} `}
                        onMouseEnter={() => this.selectSite('dropDown2')}
                        onMouseLeave={() => this.selectSite('dropDown2')}>

                    <ProductConsumer>
                        {({openLeftNavbar}) => (
                            <div  onClick={openLeftNavbar}>
                                Otworz levy navbar
                            </div>
                        )}
                    </ProductConsumer>

                    <NavbarBigMenu hovered={this.state.selected} />

                </div>

                <div className="item item5">

                </div>

                <ProductConsumer>
                    {({cart}) => {
                        return(<NavbarCart items={cart} /> )
                    }}
                </ProductConsumer>

                <NavbarLogging />

            </div>

            <NavbarBgImage />


        </div>

        )
    }
}

/*  className={` ${(caruselSelected % 2 === 0) ? "hiding" : "showing"} `}          */