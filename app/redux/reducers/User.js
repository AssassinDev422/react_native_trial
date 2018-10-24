import * as types from '../types';

const initialState = {
  loaded: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER:
      return {
        ...state,
        ...action.payload.data,
      };
    default:
      return state;
  }
};
