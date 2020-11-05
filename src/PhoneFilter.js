import React from 'react'
import {useContext} from 'react'
import {productContext,ProductConsumer} from './context'
import './PhoneFilter.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

export default function PhoneFilter() {

    const myContext = useContext(productContext);


    const {
        products,
        handleChange,
        type,
        guaranty,
        price,
        minPrice,
        maxPrice,

    } = myContext;

    //console.log(guaranty);
    //et setGuaranty = (guaranty === 1) ? 1 : 2;

    let types = getUnique(products, "company");

    types = ["all", ...types];

    types = types.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
    ));

    return (
        <ProductConsumer>

            {value => {
                const {cartOpen} = value;

                if(!cartOpen) {
                    return(
                        <React.Fragment>
                            <div className="filterDiv">
                                <div className="form-group companyFilter">
                                    <label htmlFor="type">COMPANY</label>

                                    <select
                                        name="company"
                                        id="type"
                                        onChange={handleChange}
                                        className="form-control"
                                        value={type}>
                                        {types}
                                    </select>

                                </div>

                                <div className="form-group priceFilter">
                                    <label htmlFor="price">PHONE PRICE RANGE: 0 - {price} $</label>

                                    <input
                                        type="range"
                                        name="price"
                                        min={minPrice}
                                        max={maxPrice}
                                        id="price"
                                        value={price}
                                        onChange={handleChange}
                                        className="form-control"
                                    />

                                </div>

                                <div className="single-extra radioDiv">

                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="customRadio1" checked={guaranty === true} onChange={handleChange} value="radio1" name="guaranty" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="customRadio1">GWARANCJA</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="customRadio2" checked={guaranty === false} onChange={handleChange} value="radio2" name="guaranty" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="customRadio2">BRAK GWARANCJI</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="customRadio3" checked={guaranty === "all"} onChange={handleChange} value="radio3" name="guaranty" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="customRadio3">EGAL</label>
                                    </div>

                                </div>
                            </div>
                        </React.Fragment>

                    )
                } else {
                    return <p>NIC</p>
                }
            }}

        </ProductConsumer>

    )
}
