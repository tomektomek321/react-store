import React, { Component } from 'react'
import {ProductConsumer} from './context'
import './Modal.scss'

export default class Modal extends Component {

    state = {
        ram: ['4 GB', '8 GB', '12 GB', '16 GB'],
        memory: ['128 GB', '256 GB', '512 GB'],
        ramSelected: null,
        memorySelected: null,
    }

    handleChange = () => {
        //console.log(1);
    }

    render() {

        const optsRAM = this.state.ram.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
        ));

        const optsMEMORY = this.state.memory.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
        ));

        return (
            <ProductConsumer>
                {(value) => {
                    //console.log(value);

                    if(!value.modalOpen) {
                        return null;
                    } else {
                        return (
                            <div className="modalContainer">
                                <div className="bgAddedColor"></div>

                                <div className="divProductModal mod1">
                                    <div className="modalInside ins1">
                                        <img src={value.modalProduct.img} alt="product" />
                                    </div>
                                </div>

                                <div className="divProductModal  mod2">
                                    <div className="modalInside ins2">

                                        <div className="title"> {value.modalProduct.title} </div>
                                        <div className="content">
                                            <div className="content-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                                        </div>
                                    </div>

                                </div>

                                <div className="divProductModal  mod3">
                                    <div className="modalInside ins3">

                                        <div className="div_RAM_MEMORY">
                                            <div className="form-group">
                                                <label htmlFor="type">RAM</label>

                                                <select
                                                    name="company"
                                                    id="type"
                                                    onChange={this.handleChange}
                                                    className="form-control"
                                                    value={this.state.ramSelected}>
                                                    {optsRAM}
                                                </select>

                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="type">MEMORY</label>

                                                <select
                                                    name="company"
                                                    id="type"
                                                    onChange={this.handleChange}
                                                    className="form-control"
                                                    value={this.state.memorySelected}>
                                                    {optsMEMORY}
                                                </select>

                                            </div>
                                            <div className="div_price_add">
                                                <div className="div_price">
                                                    100 $
                                                </div>
                                                <div className="div_price">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                </div>

                                                <div className="div_add">
                                                    ADD TO CART
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div className="divProductModal  mod4">
                                    <div className="modalInside ins4">
                                        <div className="content-2">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div>

                                    </div>
                                </div>

                            </div>
                        )
                    }

                }}



            </ProductConsumer>
        )
    }
}


/*
    <div className="divProductModal">

        <div className="head">{value.modalProduct.title}</div>

        <div className="productImg">

            <img src={value.modalProduct.img} alt="product" />

        </div>

    </div>

*/