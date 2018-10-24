import * as types from '../types';
import store from '../store';

// MARK - Setter

export const setPosts = () => {
  store.dispatch(storePosts());
};

// MARK - Getter

export const getPost = (id) => {
  const state = store.getState();
  return state.posts.data.find( post => post.id === id );
};

// MARK - Actions

const storePosts = () => {

  return async (dispatch) => {
      var posts = {loaded: false, error: null, data: []}
      dispatch({
        type: types.POSTS,
        payload: posts
      });
      try {
        let response = await fetch('https://www.mocky.io/v2/5b9755c43000006a000bd53f');
        var postsx = await response.json();
        posts = {data : postsx.data.sort((n, p) => n.order  - p.order), loaded: true, error: null}
      } catch(e){
            posts = {loaded: false, error: e, data: []}
      }
    dispatch({
      type: types.POSTS,
      payload: posts,
    });
  };
};
