import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import "../node_modules/materialize-css/dist/css/materialize.min.css";
import './index.css';

import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/materialize-css/dist/js/materialize.min.js";

import registerServiceWorker from './registerServiceWorker';
import rootReducers from './reducers';
import { AUTH_USER } from './actions/types';

import Wellcome from './components/wellcome';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import ForgotPass from './components/auth/forgotpass';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Navbar from './components/navbar/navbar';

const history = createHistory();
const $routerMiddleware = routerMiddleware(history);
const storeWithMiddleware = applyMiddleware(thunk, $routerMiddleware)(createStore);
const store = storeWithMiddleware(rootReducers);

if (localStorage.getItem('token')) {
	store.dispatch({ type: AUTH_USER });	
}

ReactDOM.render(
	<Provider store={ store }>
		<ConnectedRouter history={ history }>
			<div id="big_wrapper">
				<Navbar />

				<Switch>
					<Route path="/signin" component={ Signin }></Route>
					<Route path="/forgot-password" component={ ForgotPass }></Route>
					<Route path="/signup" component={ Signup }></Route>
					<Route path="/signout" component={ Signout }></Route>			
					<Route path="/about" component={ About }></Route>
					<Route path="/contact" component={ Contact }></Route>
					<Route path="/" component={ Wellcome }></Route>
				</Switch>
			</div>
		</ConnectedRouter>
	</Provider>, 
document.getElementById('root'));

registerServiceWorker();
