import initialState from './initialState';

export default function ajaxStatusReducer(state = initialState.numofAJAXCall, action) {
	if (action.type == 'BEGIN_AJAX_CALL') {
		state = state + 1;
	}else if(action.type.includes('SUCCESS')){

		state = state - 1;
	}
	return state;
}