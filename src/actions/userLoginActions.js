import * as URL from '../constants/constantValue';
import * as actionTypes from '../constants/actionTypes';
import * as utilActions from '../components/common/utils';

export function loginDetailsFetchSuccess(user, validUser, loggedIn) {
    let message = "";
    if(!validUser) message = "User does not exist";
    if(!loggedIn) message = "Invalid Password";
    return { type: actionTypes.USER_LOGIN_DETAIL_SUCCESS, payload: { user: user, validUser: validUser, loggedIn: loggedIn, message: message } };
}

export function loginDetailsFetchRequest(userDetails) {
    let validUser = false;
    let loggedIn = false;
    return function (dispatch) {
        fetch(URL.API_URL + 'people/?search=' + userDetails.username)
            .then(function (response) {
                response.json().then(body => {
                    if (body.count == 0) {
                        console.log("a");

                    } else if (body.count == 1) {
                        validUser = true;
                        if (userDetails.username===body.results[0].name  && userDetails.password === body.results[0].birth_year) {
                            loggedIn = true;
                            utilActions.saveLoginStatus();

                        } else {

                        }

                    }
                    return dispatch(loginDetailsFetchSuccess(body, validUser, loggedIn));
                });
            })
            .then(function (myJson) {
            });
    };
}