
import { storeProducts } from './../TodoDB'
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_REMOVE_ALL_ITEMS } from '../_constans/cartConstant';

export const addToCart = (productId, qty) => async (dispatch, getState) => {console.log(productId);


  let alreadyInCart =  localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
  let checkAlready;

  if(alreadyInCart.length === 0) {
    checkAlready = storeProducts.filter(item => item.id === productId)[0];

  } else {
    let checkAlready = alreadyInCart.filter(item => item.id === productId)[0];

    if(checkAlready) {

      dispatch({
        type: CART_ADD_ITEM,
        payload: {
          title: checkAlready.title,
          img: checkAlready.img,
          price: checkAlready.price,
          count: (checkAlready.count + 1),
          id: checkAlready.id,
          qty,
        },
      });

      localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
      return;

    } else {

      checkAlready = storeProducts.filter(item => item.id === productId)[0];

      dispatch({
        type: CART_ADD_ITEM,
        payload: {
          title: checkAlready.title,
          img: checkAlready.img,
          price: checkAlready.price,
          count: (checkAlready.count + 1),
          id: checkAlready.id
        },
      });

      localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
      return;

    }
  }

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      title: checkAlready.title,
      img: checkAlready.img,
      price: checkAlready.price,
      count: (checkAlready.count + 1),
      id: checkAlready.id
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

};


export const removeFromCart = (productId) => async (dispatch, getState) => {
  console.log(productId);

  let alreadyInCart =  JSON.parse(localStorage.getItem('cartItems'));
  let prod = alreadyInCart.filter(item => item.id === productId)[0];

  if(prod.count > 1) {
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        title: prod.title,
        img: prod.img,
        price: prod.price,
        count: (prod.count - 1),
        id: prod.id
      },
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  } else {

    dispatch({ type: CART_REMOVE_ITEM, payload: { productId } });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  }

};


export const removeAllFromCart = () => async (dispatch, getState) => {

  dispatch({ type: CART_REMOVE_ALL_ITEMS, payload: {} });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

