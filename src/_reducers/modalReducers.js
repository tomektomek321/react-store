import { PRODUCT_DETAILS_SELECT, PRODUCT_DETAILS_REMOVE } from '../_constans/modalConstant';

export const modalReducer = (state = { productDetails: null }, action) => {

  switch (action.type) {

      case PRODUCT_DETAILS_REMOVE:
        return { ...state, productDetails: null };

      case PRODUCT_DETAILS_SELECT:
        return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};