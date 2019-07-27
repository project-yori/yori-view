import { combineReducers } from 'redux';
import { ACTION_TYPES, STORE_TYPES } from './types';

const initialState = {
  [STORE_TYPES.STATE.TOP.PHOTOS]: []
};

const setTopData = function(state, action) {
  return {
    ...state,
    [STORE_TYPES.STATE.TOP.PHOTOS]: action.data
  };
};

const top = function(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_PHOTOS:
      return setTopData(state, action);
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  /* Add reducers here */
  top
});
