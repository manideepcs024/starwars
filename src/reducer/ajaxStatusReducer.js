import initialState from './initialState';

export default function ajaxStatusReducer(state = initialState.numofAJAXCall, action) {
	console.log("actions", action.type, state);
	if (action.type == 'BEGIN_AJAX_CALL') {
		console.log("BEGINAJAXRECD");
		state = state + 1;
	}else if(action.type.includes('SUCCESS')){
		console.log("STATe ends");

		state = state - 1;
		console.log(state,"STTATAE COunt")
	}
	return state;
}