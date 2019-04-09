import * as URL from '../constants/constantValue';
import * as actionTypes from '../constants/actionTypes';
import {beginAJAXcall} from '../actions/ajaxCallActions';

export function loadFilmsSuccess(films) {
    return { type: actionTypes.FILMS_RESULT_SUCCESS, payload: films };
}

export function loadFilms() {
    return function (dispatch) {
        dispatch(beginAJAXcall());
        let API_URL = URL.API_URL + 'films';
        fetch(API_URL)
            .then(function (response) {
                response.json().then(body => {
                    return dispatch(loadFilmsSuccess(body));

                });

            }).then(function (myJson) {

            });

    };
}

