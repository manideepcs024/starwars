import { combineReducers } from 'redux';
import ajaxCallInProgressdcdcd from './ajaxStatusReducer';
import loginuser from './loginReducer';
import planets from './planetreducer';
import films from './filmsReducer';

console.log('AJAXCALLS', ajaxCallInProgressdcdcd);

const rootReducer = combineReducers({
    loginuser: loginuser,
    planets: planets,
    films: films,
    ajaxCalls: ajaxCallInProgressdcdcd

});

export default rootReducer;