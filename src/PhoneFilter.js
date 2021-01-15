import React from 'react'
import './PhoneFilter.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from './_actions/filterAction';


const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

export default function PhoneFilter() {

    const filters = useSelector((state) => state.filters);
    const products = useSelector((state) => state.productList);


    let types = getUnique(products, "company");

    const dispatch = useDispatch();
    console.log(filters);

    const handleChange = (e) => {
        if(e.target.type === "select-one") {
            let x = {...filters};
            x.company = e.target.value;

            dispatch(changeFilter(x));
        } else if(e.target.type === "radio") {
            let x = {...filters};

            if(e.target.value === 'radio1') {
                x.guaranty = true;
            } else if(e.target.value === 'radio2') {
                x.guaranty = false;
            } else if(e.target.value === 'radio3') {
                x.guaranty = 'egal';
            }

            console.log(x);
            dispatch(changeFilter(x));
        } else if(e.target.type === "range") {
            let x = {...filters};

            x.price = e.target.value;

            dispatch(changeFilter(x));
        }

    }

    types = ["all", ...types];

    types = types.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
    ));

    return (

        <div className="filterDiv">
            <div className="form-group companyFilter">
                <label htmlFor="type">COMPANY</label>

                <select
                    name="company"
                    id="type"
                    onChange={handleChange}
                    className="form-control"
                    value={filters.type}>
                    {types}
                </select>

            </div>

            <div className="form-group priceFilter">
                <label className="price" htmlFor="price">PRICE RANGE: 0 - {filters.price} $</label>

                <input
                    type="range"
                    name="price"
                    min={filters.minPrice}
                    max={filters.maxPrice}
                    id="price"
                    value={filters.price}
                    onChange={handleChange}
                    className="form-control"
                />

            </div>

            <div className="single-extra radioDiv">

                <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio1" checked={filters.guaranty === true} onChange={handleChange} value="radio1" name="guaranty" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadio1">GWARANCJA</label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio2" checked={filters.guaranty === false} onChange={handleChange} value="radio2" name="guaranty" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadio2">BRAK GWARANCJI</label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio3" checked={filters.guaranty === "egal"} onChange={handleChange} value="radio3" name="guaranty" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadio3">EGAL</label>
                </div>

            </div>
        </div>

    )
}
