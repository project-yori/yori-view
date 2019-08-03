import { combineReducers } from "redux";
import { ACTION_TYPES, STORE_TYPES } from "./types";

const initialState = {
  [STORE_TYPES.STATE.TOP.META]: {
    [STORE_TYPES.STATE.TOP.PHOTOS]: []
  },
  [STORE_TYPES.STATE.CREATE.META]: {
    [STORE_TYPES.STATE.CREATE.GROUP]: null,
    [STORE_TYPES.STATE.CREATE.COSTUME]: null,
    [STORE_TYPES.STATE.CREATE.MEMBER]: [],
    [STORE_TYPES.STATE.CREATE.CURR_SELECTED_MEM_TYPE]: { member: null, type: null },
  },
  //for test
  // create: {
  //   group: "keyakizaka",
  //   costume: "2019_july_2_yukata",
  //   member: [{photo_member: 'sugai_yuuka'}, {photo_member: 'moriya_akane'}, {photo_member: 'yamasaki_ten'}],
  //   curr_selected_member_type: { member: null, type: null },
  // }
};

const setTopData = function(state, action) {
  return {
    ...state,
    [STORE_TYPES.STATE.TOP.PHOTOS]: action.data
  };
};

const top = function(state = initialState.top, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_PHOTOS:
      return setTopData(state, action);
    default:
      return state;
  }
};

const create = function(state = initialState.create, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_PHOTO_GROUP:
      return {
        ...state,
        [STORE_TYPES.STATE.CREATE.GROUP]: action.data
      };
    case ACTION_TYPES.CREATE_PHOTO_COSTUME:
      return {
        ...state,
        [STORE_TYPES.STATE.CREATE.COSTUME]: action.data
      };
    case ACTION_TYPES.CREATE_PHOTO_ADD_MEMBER:
      return {
        ...state,
        [STORE_TYPES.STATE.CREATE.MEMBER]: [
          ...state[STORE_TYPES.STATE.CREATE.MEMBER],
          { photo_member: action.data }
        ]
      };
    case ACTION_TYPES.CREATE_PHOTO_DEL_MEMBER:
      return {
        ...state,
        [STORE_TYPES.STATE.CREATE.MEMBER]: state.member.filter(
          item => item.photo_member !== action.data
        )
      };
    case ACTION_TYPES.CREATE_PHOTO_TYPE_NUMBER:
      return {
        ...state,
        [STORE_TYPES.STATE.CREATE.MEMBER]: [
          ...state[STORE_TYPES.STATE.CREATE.MEMBER].filter(
            item => item.photo_member !== action.data.photo_member
          ),
          { ...action.data }
        ]
      };
    case ACTION_TYPES.CREATE_PHOTO_TYPE_CURR_SELECTED_MEM_TYPE:
      return {
        ...state,
        [STORE_TYPES.STATE.CREATE.CURR_SELECTED_MEM_TYPE]: { ...action.data }
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  /* Add reducers here */
  top,
  create
});
