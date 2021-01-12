import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import './NavbarBgImage.scss'
import './NavbarBgImage_RWD.scss'

export default class NavbarBgImage extends Component {

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

    changeView = (id) => {
        this.setState({caruselShowed: id });
    }


    render() {
        return (

            <ProductConsumer>
                {({caruselSelected}) => {

                    let imgName = "img/electphoto" + caruselSelected + ".jpg";

                    return(
                        <div className="bgImg">
                            <img src={imgName} alt="x" />
                            <div className="lorem"></div>
                            <div className="text2">
                                { this.state.caruselTitles.map((item, index) => {
                                    //console.log(this);
                                    return (
                                        <div key={index} className={`itek ${ (this.state.caruselShowed === index) ? "ac" : "" } `} onClick={() => this.changeView(index) } >
                                            <div className="it">{item}</div><div className="pip"></div>
                                        </div>)
                                }) }
                            </div>


                            <div className="text3">

                                <div className={`itek ac `}>

                                    <div className="pip">
                                    </div>
                                    <div className="it">
                                        <div className="title">
                                            {this.state.caruselTitles[this.state.caruselShowed]}
                                        </div>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged. It was popularised in the 1960s with the release of
                                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                        software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                                    <div className="it-btn">
                                        <input type="button" className="btnik" value="CHECK MORE" />
                                    </div>

                                </div>

                            </div>


                            {/*<div className="text1">

                                <div className={` ${ (caruselSelected === 0) ? "selected" : "" } `} >Check our products</div>

                                <div className={`midd ${ (caruselSelected === 1) ? "selected" : "" } `} >Contact us</div>

                                <div className={` ${ (caruselSelected === 2) ? "selected" : "" } `} >Other info</div>

                            </div>*/}

                        </div>
                    )
                }}
            </ProductConsumer>

        )
    }
}
