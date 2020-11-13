import React, { Component } from 'react'

export default class ProductColors extends Component {
    render() {
        return (
            <div className="colorsDiv">
                <div>Colors</div>
                <div className="items">
                    <div className="it red"></div>
                    <div className="it green"></div>
                    <div className="it black"></div>
                    <div className="it yellow"></div>
                    <div className="it blue"></div>
                </div>
            </div>
        )
    }
}
