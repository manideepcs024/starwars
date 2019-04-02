import * as URL from '../constants/constantValue';
import * as actionTypes from '../constants/actionTypes';


export function planetDetailsFetchSuccess(planets) {
    console.log("PLANETS RECD", planets);
    return { type: actionTypes.PLANET_DETAIL_SUCCESS, payload: { planets: planets } };
}

export function planetsFetchRequest(searchFields) {
    console.log("PLANETS_FETCH_CALLED");
    return function (dispatch) {
        let API_URL=URL.API_URL + 'planets';
if(searchFields){
API_URL = API_URL + '?search=' + searchFields;
}else{
    API_URL = API_URL + '?page=1';
}
        fetch(API_URL)
            .then(function (response) {
                response.json().then(body => {
                    console.log("planets  Details", body);
                    return dispatch(planetDetailsFetchSuccess(body));

                });



                // return response.json();
            })
            .then(function (myJson) {
                console.log(JSON.stringify(myJson));
            });
    };
}