import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const rootReducers = combineReducers({
	form,
	default: (state  = []) => state
});

export default rootReducers;