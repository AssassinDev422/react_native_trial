import * as types from '../types';

const initialState = {
    data: [],
    loaded: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.POSTS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
