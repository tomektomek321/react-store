
import { storeProducts } from './../TodoDB'
import {PRODUCT_DETAILS_REMOVE, PRODUCT_DETAILS_SELECT  } from '../_constans/modalConstant';

export const selectModalProduct = (productId) => async (dispatch, getState) => {

  let checkAlready = storeProducts.filter(item => item.id === productId)[0];

  if(checkAlready) {

    dispatch({
      type: PRODUCT_DETAILS_SELECT,
      payload: checkAlready,
    });
  }
};

export const removeModalProduct = () => async (dispatch, getState) => {

  dispatch({ type: PRODUCT_DETAILS_REMOVE, payload: {} });

};

