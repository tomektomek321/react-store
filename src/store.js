
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import { productDetailsReducer, productListReducer } from './_reducers/productsReducers';
import { cartReducer} from './_reducers/cartReducers'
import { filterReducer} from './_reducers/filterReducers'
import { modalReducer} from './_reducers/modalReducers'
import { storeProducts } from './TodoDB'


let pr = storeProducts;

let min = Math.min(...pr.map(item => item.price));
let max = Math.max(...pr.map(item => item.price));


const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    },
    productList: storeProducts,
    filters: {
        company: "all",
        guaranty: "egal",
        price: max,
        minPrice: min,
        maxPrice: max,
    },
    productDetails: null
};

const reduser = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    filters: filterReducer,
    modal: modalReducer,
})

const composeEnhencer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reduser, initialState, composeEnhencer(applyMiddleware(thunk)));

export default store;