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
    [STORE_TYPES.STATE.CREATE.CURR_SELECTED_MEM_TYPE]: {
      member: null,
      type: null
    }
  },
  //for test
  create: {
    group: "keyakizaka",
    costume: "2019_july_2_yukata",
    member: {
      sugai_yuuka: {
        photoTypeNumber: {
          yori: 0,
          chu: 0,
          hiki: 0,
          suwari: 0
        }
      },
      moriya_akane: {
        photoTypeNumber: {
          yori: 0,
          chu: 0,
          hiki: 0,
          suwari: 0
        }
      },
      yamasaki_ten: {
        photoTypeNumber: {
          yori: 0,
          chu: 0,
          hiki: 0,
          suwari: 0
        }
      }
    },
    curr_selected_member_type: { member: null, type: null }
  }
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
        [STORE_TYPES.STATE.CREATE.MEMBER]: {
          ...state[STORE_TYPES.STATE.CREATE.MEMBER],
          [action.data]: {
            photoTypeNumber: {
              yori: 0,
              chu: 0,
              hiki: 0,
              suwari: 0
            }
          }
        }
      };
    case ACTION_TYPES.CREATE_PHOTO_DEL_MEMBER:
      const memberToDelete = action.data;
      const {
        [memberToDelete]: {},
        ...restMember
      } = state.member;
      return {
        ...state,
        [STORE_TYPES.STATE.CREATE.MEMBER]: {
          ...restMember
        }
      };
    case ACTION_TYPES.CREATE_PHOTO_TYPE_NUMBER:
      return {
        ...state,
        [STORE_TYPES.STATE.CREATE.MEMBER]: {
          ...state[STORE_TYPES.STATE.CREATE.MEMBER],
          [action.data.photo_member]: {
            ...state[STORE_TYPES.STATE.CREATE.MEMBER][action.data.photo_member],
            photoTypeNumber: {
              ...state[STORE_TYPES.STATE.CREATE.MEMBER][
                action.data.photo_member
              ].photoTypeNumber,
              [action.data.photo_type]: parseInt(action.data.photo_number)
            }
          }
        }
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
