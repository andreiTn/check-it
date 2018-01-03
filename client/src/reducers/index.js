import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as router } from 'react-router-redux';

import auth from './authentication';
import about from './about';

const rootReducer = combineReducers({ router, form, auth, about });

export default rootReducer;
