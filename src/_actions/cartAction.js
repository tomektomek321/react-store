import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_REMOVE_ALL_ITEMS } from '../_constans/cartConstant';

export const addToCart = (productId, qty) => async (dispatch, getState) => { console.log(123);
  const { data } = await Axios.get(`http://localhost:5500/api/products/${productId}`);
  console.log(data);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.title,
      image: data.img,
      price: data.price,
      countInStock: data.count,
      product: data.id,
      qty,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};


export const removeFromCart = (productId) => async (dispatch, getState) => {

  dispatch({ type: CART_REMOVE_ITEM, payload: { productId } });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};


export const removeAllFromCart = () => async (dispatch, getState) => {

  dispatch({ type: CART_REMOVE_ALL_ITEMS, payload: {} });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

