import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer } from './context'
import './Product.scss'
import ProductColors from './ProductColors'


export default class Product extends Component {

    state = {
        photoShowed: true,
        mainDivHover: false,
        detailsShowed: false,
    }

    hidePhoto = () => {     this.setState({ photoShowed: !this.state.photoShowed }); }
    mainDivHov = () => {    this.setState({ mainDivHover: !this.state.mainDivHover }); }

    showDetails = () => {
        this.setState({
            detailsShowed: !this.state.detailsShowed
        })
    }

    render() {

        const {id, title, img, price, inCart} = this.props.product;

        let imgClass = (this.state.photoShowed) ? "productImg" : "productImg hidden" ;
        let hovDiv = (this.state.mainDivHover) ? "divProduct hov" : "divProduct" ;

        let detailsShowed = (this.state.detailsShowed) ? "detailsShowed" : "" ;


        let detailsData = [
            ['Prozessor', 'Exynos 9820'],
            ['Prozessor-Taktfrequenz', '2.7 GHz + 2.3 GHz + 1.9 GHz Octa-Core'],
            ['Betriebsystem', 'Android 9'],
            ['Speicherkapazität', '128GB'],
            ['Steckplatz für Speicherkarten', 'Ja'],
            ['Speicherkartenformat', 'Micro-SD'],
            ['Arbeitsspeicher-Größe', '8GB'],
            ['Auflösung (HxB)', '3.040 x 1.440 Pixel'],
            ['Front-Kamera Auflösung', '10 Megapixel'],
            ['Abmessungen (B/H/T) / Gewicht', '70.4 mm x 149.9 mm x 7.8 mm / 157 g'],
        ];


        const detailsDataHTML = detailsData.map((item, index) => {
            return <div className="details_item" key={index}>
                <div className="details_item--name">
                    {item[0]}
                </div>
                <div className="details_item--value">
                    {item[1]}
                </div>
            </div>;
        });

        return (
            <ProductConsumer>

            {value => (

                <div className="cartProductDiv">

                    <div  className={`divProduct_front ${detailsShowed}`} >

                        <div className={hovDiv}  onMouseEnter={this.mainDivHov} onMouseLeave={this.mainDivHov}>

                            <div className="head">{title}</div>
                            <div className={`bgAddedColor ${value.isAdded(id) ? 'x' : 'y'}`}></div>

                            <div className={imgClass}>
                                <Link to="/details">
                                    <img src={img} alt="product" />
                                </Link>
                            </div>

                            <div className={`btnCart ${value.isAdded(id) ? 'added' : ''}`}
                                disabled={inCart ? true : false}
                                onClick={ () => {
                                    value.addToCart(id);
                                }}>


                                {value.isAdded(id) ? (
                                    <div className="name added">In Cart</div>
                                ) : (
                                    <div className="name">Do koszyka</div>
                                )}

                                <div className={`image ${value.isAdded(id) ? 'added' : ''}`}>
                                    <img alt="nic" src="img/cart-59-32.ico" />
                                </div>

                            </div>


                            <div className="priceDiv">

                                <div className="btnPrice">
                                        Price: {price} $
                                </div>

                            </div>

                            <div className="detailsInfo">

                                <ProductColors />

                                <div className="displayInfo info">
                                    <div className="name">Display</div>
                                    <div className="info">15.5cm / 6.1 Zoll</div>
                                </div>
                                <div className="procesorInfo info">
                                    <div className="name">Procesor</div>
                                    <div className="info">Exyson 850</div>
                                </div>
                                <div className="systemInfo info">
                                    <div className="name">System</div>
                                    <div className="info">Android 10.0, One UI Core 2.1</div>
                                </div>
                                <div className="showDetailsBtn info" onClick={this.showDetails}>
                                    <div className="text">SZCZEGOLY</div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className={`divProduct_back ${detailsShowed}`} onMouseLeave={this.showDetails}>

                        <div className="divProduct_back_content">

                            <div className="details_header">Technische Merkmale</div>

                            {detailsDataHTML}

                        </div>

                    </div>



                </div>

            )}

            </ProductConsumer>
        )
    }
}
