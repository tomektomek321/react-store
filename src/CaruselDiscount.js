import React, { Component } from 'react'
import './CaruselDiscount.scss'
import './CaruselDiscount_RWD.scss'
import {ProductConsumer} from './context';
import CaruselDiscountItem from './CaruselDiscountItem'

export default class CaruselDiscount extends Component {

    state = {
        shift: 0,
        nowChange: false,
        dir: "right",
        nowGo: null,
    }

    left = () => {
        this.setState({shift: this.state.shift + 1, nowChange: true, dir: "left"});
        this.noChange();
    }

    right = () => {

    }

    noChange = () => {
        let _t = this;
        setTimeout(function() {
            _t.setState({nowChange: false});
        }, 1000)
    }

    setNumber = (nr) => {

        let mod = ((this.state.shift + nr) > 0) ? (this.state.shift + nr) : Math.abs(this.state.shift - nr);

        let mod2 = ((mod) % 6);
        //console.log("mod z " + nr + " to: " + mod2);

        return mod2;
    }


    setAnimationClass = (nr) => {

        if(!this.state.nowChange) return "";

        let absNr = ((this.state.shift + nr) > 0) ? (this.state.shift + nr) : Math.abs(this.state.shift - nr);
        //console.log("shift maded: " + absNr);


        if(this.state.dir === "left") {
            return (((absNr) % 6) === 0) ? "" : "leftek";
        } else {
            return (((absNr) % 6) === 5) ? "" : "leftek";
        }
    }


    render() {

        return (
            <div className="caruselContent">

                <div className="header1">
                    LAST BOUGHT PRODUCTS IN PAST MONTH
                </div>

                <div className="caruselDiscount">

                    <div className="btnNext" onClick={this.left}>
                        <img src="img/arrow-88-32.ico" alt="nic" />
                    </div>

                    <div className="prodCont">

                        <ProductConsumer>

                            {value => {
                                return value.filteredProducts.map(product=> {
                                    //console.log(1);
                                    if(product.id < 7) {
                                        return <CaruselDiscountItem
                                                key={product.id}
                                                product={product}
                                                animation={this.setAnimationClass}
                                                setNumber={this.setNumber}
                                            />
                                    } else {
                                        return null;
                                    }

                                })
                            }}

                        </ProductConsumer>

                    </div>

                <div className="btnNext" onClick={this.right}>
                    <img src="img/arrow-24-32.ico" alt="nic" />
                </div>

            </div>
            </div>
        )
    }
}

