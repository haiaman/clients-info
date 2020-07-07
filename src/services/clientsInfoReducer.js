import { combineReducers } from "redux";

import {
  FETCH_CLIENTSINFO,
  FETCH_CLIENTSINFO_SUCCESS,
  FETCH_CLIENTSINFO_ERROR,
} from "./clientsInfoAction";

const initialState = {
  clientsInfo: [],
};

const actionMap = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLIENTSINFO_SUCCESS:
      return {
        ...state,
        clientsInfo: action.payload,
      };
    default:
      return state;
  }
};
const rootReducers = combineReducers({ actionMap });

export default rootReducers;
