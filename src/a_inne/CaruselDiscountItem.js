import React, { Component } from 'react'
import './CaruselDiscountItem.scss'


export default class CaruselDiscountItem extends Component {

    render() {

        return (
            <div className={`prod ${this.props.animation(this.props.product.id)} left${this.props.setNumber(this.props.product.id)} `}>

                <div className="ins">

                    <div className="headek1">
                        {this.props.product.title}
                    </div>
                    <div className="cont">
                        <img src={this.props.product.img} alt="nic" />
                    </div>
                    <div className="footer1">
                        {this.props.product.price} $
                    </div>

                </div>

            </div>
        )
    }
}

