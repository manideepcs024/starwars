import initialState from './initialState';
import * as actionTypes from '../constants/actionTypes';

export default function planetReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.PLANET_DETAIL_SUCCESS:
        console.log("Planet detail recd", action);
            return action.payload;
            case action.PLANET_SINGLE_DETAIL_SUCCES:
            return action.payload;
        default:
            return state;

    }

}