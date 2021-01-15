import Axios from "axios";
import { storeProducts } from '../TodoDB'
import {

    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL

} from "../_constans/ProductConstans"

export const listProducts = (filters = null) => async(dispatch) => {

    dispatch({
        type: PRODUCT_LIST_REQUEST
    });

    console.log(filters);

    try {
        //const res = await Axios.get('/api/products');
        const res = storeProducts;
        console.log(res);
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: res});

    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }

};

export const detailsProduct = (productId) => async(dispatch) => {
    dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId});

    try {
        console.log(2);
        const res = await Axios.get('/api/product/' + productId);
        console.log(res);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: res.data})
    } catch (error) {
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }


}








