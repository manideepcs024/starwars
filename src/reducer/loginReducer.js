import initialState from './initialState';
import * as actionTypes from '../constants/actionTypes';

export default function loginReducer(state=initialState.loginuser,action){
    switch(action.type){
        case actionTypes.USER_LOGIN_DETAIL_SUCCESS:
        if(action.payload.user.count ==1){
           return action.payload;
        }else{
            return action.payload;
        }

        default:
        return state;

    }

}