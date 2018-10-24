import * as types from '../types';
import store from '../store';

// MARK - Setter

export const setUser = () => {
  store.dispatch(storeUser());
};

// MARK - Getter

export const getUserName = () => {
  const state = store.getState();
  return state.user.name;
};

// MARK - Actions

const storeUser = () => {

  return async (dispatch) => {
    let response = await fetch('https://www.mocky.io/v2/5b9751e5300000332a0bd52d');
    let user = await response.json();
    dispatch({
      type: types.USER,
      payload: user,
    });
  };
};
