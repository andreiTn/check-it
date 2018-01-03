import { GET_ABOUT } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case GET_ABOUT:
			return {...state, content: action.payload};
		default:
			return state;
	}
}