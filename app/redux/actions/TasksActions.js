import * as types from '../types';
import store from '../store';

// MARK - Setter

export const setTasks = () => {
  store.dispatch(storeTasks());
};

// MARK - Getter

export const getTask = (id) => {
  const state = store.getState();
  return state.tasks.data.find( task => task.id === id );
};

// MARK - Actions

const storeTasks = () => {

  return async (dispatch) => {
    let response = await fetch('https://www.mocky.io/v2/5b97533d30000070000bd533');
    let tasks = await response.json();
    dispatch({
      type: types.TASKS,
      payload: tasks,
    });
  };
};
