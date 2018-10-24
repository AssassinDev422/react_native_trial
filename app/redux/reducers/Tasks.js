import * as types from '../types';

const initialState = {
    data: [],
    loaded: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.TASKS:
            return {
                ...state,
                data: [...action.payload.data]
            };
        default:
            return state;
    }
};
