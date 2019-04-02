import * as URL from '../constants/constantValue';
import * as actionTypes from '../constants/actionTypes';
import * as utilActions from '../components/common/utils';

export function loginDetailsFetchSuccess(user, validUser, loggedIn) {
    console.log("USER in actions", user, actionTypes.USER_LOGIN_DETAIL_SUCCESS);
    let message = "";
    if(!validUser) message = "User does not exist";
    if(!loggedIn) message = "Invalid Password";
    return { type: actionTypes.USER_LOGIN_DETAIL_SUCCESS, payload: { user: user, validUser: validUser, loggedIn: loggedIn, message: message } };
}

export function loginDetailsFetchRequest(userDetails) {
    console.log("I am called user fecth");
    let validUser = false;
    let loggedIn = false;
    return function (dispatch) {
        console.log("I am called user fecth here...");
        fetch(URL.API_URL + 'people/?search=' + userDetails.username)
            .then(function (response) {
                response.json().then(body => {
                    console.log("User Details", body);
                    if (body.count == 0) {

                        console.log("User does not exists");

                    } else if (body.count == 1) {
                        validUser = true;
                        if (userDetails.password === body.results[0].birth_year) {
                            loggedIn = true;
                            console.log("Valid user");
                            utilActions.saveLoginStatus();

                        } else {

                            console.log("Invalid user");
                        }

                    }
                    return dispatch(loginDetailsFetchSuccess(body, validUser, loggedIn));
                });
            })
            .then(function (myJson) {
                console.log(JSON.stringify(myJson));
            });
    };
}