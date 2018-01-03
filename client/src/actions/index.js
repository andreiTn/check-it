
import axios from 'axios';
import { push } from 'react-router-redux';
import { 
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR,
	FETCH_MESSAGE,
	GET_ABOUT
} from './types';

const ROOT_URL = 'https://localhost';

export function signinUser({ email, password }) {
	return function (dispatch) {
		// Submit email/password to the server
		axios.post(`${ROOT_URL}/signin`, { email, password })
			.then(({ data }) => {
				// If the request is good
				// - Update state to indicate user is authenticated
				dispatch({ type: AUTH_USER });

				console.log(data)
				// - Save the JWT token
				localStorage.setItem("token", data.token);

				// - Redirect the user to route '/about'
				dispatch(push('/about'));
			})
			.catch(err => {
				// If the request is bad
				// - Show an error
				dispatch(authError("Bad login info"));
			});
	}
}

export function signoutUser() {
	return function (dispatch) {
		// Delete jwt from local localStorage
		localStorage.removeItem("token");
		// Update the state
		dispatch({ type: UNAUTH_USER });
	}
}

export function signupUser({ email, password }) {
	return function (dispatch) {
		axios.post(`${ROOT_URL}/signup`, { email, password })
			.then(({ data }) => {
				dispatch({ type: AUTH_USER });
				localStorage.setItem("token", data.token);
				dispatch(push('/about'));
			})
			.catch(err => {
				dispatch(authError(err.data.error));
			});
	}
}

export function fetchMessage() {
	return function (dispatch) {
		axios.get(ROOT_URL, {
			headers: { authorization: localStorage.getItem("token") }
		})
			.then(response => {
				dispatch({ type: FETCH_MESSAGE, payload: "Authenticated" })
			})
			.catch(err => {
				dispatch(authError("JWT not valid"));
			})
	}
}

function authError(message) {
	return {
		type: AUTH_ERROR,
		error: message
	}
}


export function getAbout() {
	return function(dispatch) {
		axios.get(`${ROOT_URL}/about`, {
			headers: { authorization: localStorage.getItem("token") }
		})
			.then(response => {
				dispatch({
					type: GET_ABOUT,
					payload: response.data.content
				})
			})
			.catch(err => console.log("Err: ", err));
	}
}