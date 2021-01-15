//import Axios from 'axios';
//import { storeProducts } from './../TodoDB'
import { CHANGE_FILTERS, RESET_FILTERS } from '../_constans/filterConstants';

export const changeFilter = (newFilter) => async (dispatch) => {

    console.log(newFilter);

  dispatch({
    type: CHANGE_FILTERS,
    payload: newFilter
    ,
  });

};


export const resetFilter = (id) => async (dispatch, getState) => {
  console.log();

  dispatch({ type: RESET_FILTERS, payload: { id } });

};



