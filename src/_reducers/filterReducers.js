import { RESET_FILTERS, CHANGE_FILTERS } from '../_constans/filterConstants';

export const filterReducer = (state = [], action) => {

  switch (action.type) {

      case CHANGE_FILTERS:
        return { ...action.payload };

      case RESET_FILTERS:
        return { state };

    default:
      return state;
  }
};