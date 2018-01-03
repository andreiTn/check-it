import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from '../actions/types';

export default function (state = { authenticated: false }, action) {
	switch (action.type) {
		case AUTH_USER:
			return { ...state, authenticated: true }
		case UNAUTH_USER:
			return { ...state, authenticated: false }
		case AUTH_ERROR:
			return { ...state, errorMessage: action.error }
		case FETCH_MESSAGE:
			return { ...state, message: action.payload }
		default:
			return state;
	}
}