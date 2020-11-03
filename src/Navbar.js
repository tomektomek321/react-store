import React, { Component } from 'react'
import './Navbar.scss';
import { Link } from 'react-router-dom'
//import { UserConsumer } from './userContext'
import { ProductConsumer } from './context';
import BigMenu from './BigMenu';


export default class Navbar extends Component {

    state = {
        isOpen: false,
        downMenuOpened: false,
        selected: 'home',
        beforeDropDown: '',
    }

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
    /*

    <Link to="/cart">
        <ProductConsumer>

            {({getCart, openCart}) => (
                <div  onClick={openCart}>
                    Razem do zaplaty: { getCart() } $
                </div>
            )}

        </ProductConsumer>
    </Link>

    <UserConsumer>

        {({login, logOut, logIn}) => (
            <div>
                {(login === '')
                    ?
                    <span>
                        <button className="btn btn-info btn-l ml-2" onClick={logIn}>
                            Zaloguj
                        </button>
                    </span>
                    :
                    <span>
                        Witam {login}
                        <button className="btn btn-info btn-l ml-2" onClick={logOut}>
                            Wyloguj
                        </button>
                    </span>
                }

            </div>
        )}

    </UserConsumer>




    */

    render() {


        return (

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

                    <BigMenu hovered={this.state.selected} />

                </div>

                <div className="item item5">

                </div>

                <div className="logging width-2x">

                    <div className="dropLogin">
                        <div>
                            <input className="form-control" placeholder="login.." type="text" />
                        </div>
                        <div>
                            <input className="form-control" placeholder="password.." type="text" />
                        </div>
                        <div>
                            <input type="button" className="btn btn-outline-primary logInBtn" value="Log" />
                        </div>
                    </div>

                    <input type="button" className="btn btn-outline-primary" value="Login" />

                </div>

                <div className="animateMenu">

                    <div className="mainIcon">

                    </div>

                    <div className="downMenu">

                        <div className="it down">
                            <img alt="nic"  src="img/user-32.ico" />
                        </div>
                        <div className="it down">
                            <img alt="nic"  src="img/basketball-32.ico" />
                        </div>
                        <div className="it down">
                            <img alt="nic"  src="img/tennis-32.ico" />
                        </div>
                        <div className="it down">
                            <img alt="nic"  src="img/bar-chart-3-32.ico" />
                        </div>
                        <div className="it down">
                            <img alt="nic"  src="img/logout-32.ico" />
                        </div>
                        <div className="it main">
                            <img alt="nic"  src="img/x-mark-3-32.ico" />
                        </div>
                    </div>


                </div>


            </div>

        )
    }
}
