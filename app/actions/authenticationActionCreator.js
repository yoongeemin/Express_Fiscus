import * as Constants from "../utils/constants";

export function signIn(credentials) {
	return dispatch => {
		dispatch({ type: Constants.SIGNIN_USER_REQUEST });

		$.ajax({
			type: Constants.POST,
			url: Constants.SIGNIN_API,
			data: credentials
		}).done(function(response) {
			dispatch({ type: Constants.SIGNIN_USER_SUCCESS });
			top.frames.location.reload(false);
		}).fail(function(xhr, status, error) {
			dispatch({ type: Constants.SIGNIN_USER_FAILURE, error: error });
		});
	};
}

export function signOut() {
	return dispatch => {
		dispatch({ type: Constants.SIGNOUT_USER_REQUEST });
		
		$.ajax({
			type: Constants.GET,
			url: Constants.SIGNOUT_API
		}).done(function(response) {
			dispatch({ type: Constants.SIGNOUT_USER_SUCCESS });
			top.frames.location.reload(false);
		}).fail(function(xhr, status, error) {
			dispatch({ type: Constants.SIGNOUT_USER_FAILURE, error: error });
		});
	};
}

export function signUp(credentials) {
	return dispatch => {
		dispatch({ type: Constants.SIGNUP_USER_REQUEST });

		$.ajax({
			type: Constants.POST,
			url: Constants.SIGNUP_API,
			data: credentials
		}).done(function(response) {
			dispatch({ type: Constants.SIGNUP_USER_SUCCESS });
			top.frames.location.reload(false);
		}).fail(function(xhr, status, error) {
			dispatch({ type: Constants.SIGNUP_USER_FAILURE, error: error });
		});
	};
}

export function activateUser() {
	return dispatch => {	
		dispatch({ type: Constants.ACTIVATE_USER_REQUEST });

		$.ajax({
			type: Constants.GET,
			url: Constants.ACTIVATE_API,
			data: credentials
		}).done(function(response) {
			dispatch({ type: Constants.ACTIVATE_USER_SUCCESS });
			top.frames.location.reload(false);
		}).fail(function(xhr, status, error) {
			dispatch({ type: Constants.ACTIVATE_USER_FAILURE, error: error });
		});
	};
}



