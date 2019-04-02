import initialState from './initialState';
import * as actionTypes from '../constants/actionTypes';

export default function loginReducer(state=initialState.loginuser,action){
    switch(action.type){
        case actionTypes.USER_LOGIN_DETAIL_SUCCESS:
        console.log('User logged In', action.payload, state);
        if(action.payload.user.count ==1){
           console.log('User exists', action.payload);
           return action.payload;
        }else{
            console.log("User state", action.payload);
            return action.payload;
        }

        default:
        return state;

    }

}