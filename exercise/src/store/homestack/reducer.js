import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './actionTypes';


const initialState = {
    userData: null,
    isFetching: false,
    error: null,

};

const homestack = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                userData: action.payload,
                error: null,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                userData: null,
                isFetching: false,
                error: action.error
            }
        default:
            return state;
    }
};

export default homestack;