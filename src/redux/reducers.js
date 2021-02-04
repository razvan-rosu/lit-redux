import { SET_SPINNER, SET_ERROR, SET_DATA } from './actions.js';

const initialState = {
  isLoading: false,
  data: [],
  hasError: false,
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPINNER:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_ERROR:
      return {
        ...state,
        hasError: action.hasError,
      };
    case SET_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};
