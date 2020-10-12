import React from 'react'
import {useContext} from 'react'
import {productContext,ProductConsumer} from './context'

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
    

    let setGuaranty = (guaranty === 'all') ? false : guaranty;

    let types = getUnique(products, "company");

    types = ["all", ...types];

    types = types.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
    ));

/*
/*
<ProductConsumer>
{(value) => {

    const {modalOpen} = value;
    const {img, title} = value.modalProduct;


    if(!modalOpen) {
        return null;
    } else {
        return (
            */
    return (
        <ProductConsumer>

            {value => {
                    //console.log(value);
                    
                    const {cartOpen} = value;
                    console.log(cartOpen);
                    if(!cartOpen) {
                        return(
                            <React.Fragment>
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="type">company</label>
                                        <select
                                            name="company"
                                            id="type"
                                            onChange={handleChange}
                                            className="form-control"
                                            value={type} >
                                            {types}
                                        </select>
                                    </div>
                        
                                    <div className="form-group">
                                        <label htmlFor="price">phone price ${price}</label>
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
                                    
                                    <div className="single-extra">
                        
                                        <input
                                            type="checkbox"
                                            name="guaranty"
                                            id="guaranty"
                                            checked={setGuaranty}
                                            onChange={handleChange}
                                        />
                        
                                        <label htmlFor="guaranty">guaranty</label>
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
