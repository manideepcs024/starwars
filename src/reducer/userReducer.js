export default function userReducer(state=[], action){
    switch(action.type){
        case 'USER_DETAIL_SUCCESS':
        console.log('action recs', action);
        return action.payload.user;
            default: 
        return state;
    }
              

}