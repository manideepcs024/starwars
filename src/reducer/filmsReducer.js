import initalState from './initialState';
import * as types from '../constants/actionTypes';

export default function filmReducer(state = initalState, action) {

    switch (action.type) {
        case types.FILMS_RESULT_SUCCESS:
        console.log("we reached here", action);
        return action.payload;
        default:
        return state;
    }
}

