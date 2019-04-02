import {combineReducers} from 'redux';
import courses from './courseReducer';
import user from './userReducer';
import authors from './authorReducer';
import ajaxCallInProgressdcdcd from './ajaxStatusReducer';
import loginuser from './loginReducer';
import planets from './planetreducer';

console.log('AJAXCALLS',ajaxCallInProgressdcdcd);

const rootReducer = combineReducers({
courses: courses,
user: user,
authors: authors,
loginuser:loginuser,
planets: planets,
ajaxCalls: ajaxCallInProgressdcdcd

});

export default rootReducer;