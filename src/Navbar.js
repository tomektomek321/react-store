import React, { Component } from 'react'
import './Navbar.scss';
import {Link} from 'react-router-dom'


export default class Navbar extends Component {

    state = {
        isOpen: false,

    }

    toogleOpen = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    
    render() {
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

                <div>About</div>

                <div></div>

                <div className="icon" onClick={console.log(1)}>&#9776;</div>

            </div>

        )
    }
}
