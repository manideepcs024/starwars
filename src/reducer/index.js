import {combineReducers} from 'redux';
import ajaxCallInProgressdcdcd from './ajaxStatusReducer';
import loginuser from './loginReducer';
import planets from './planetreducer';

console.log('AJAXCALLS',ajaxCallInProgressdcdcd);

const rootReducer = combineReducers({
loginuser:loginuser,
planets: planets,
ajaxCalls: ajaxCallInProgressdcdcd

});

export default rootReducer;