import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './navbar.css';

class Navbar extends Component {
	renderMenu() {
		if (this.props.authenticated) {
			return (
				<React.Fragment>
					<li><Link to="/weather">Weather</Link></li>
					<li><Link to="/movies">Videos</Link></li>
					<li><Link to="/todo">Todo</Link></li>
				</React.Fragment>
			);
		}
		return false;
	}

	renderSignout() {
		if (this.props.authenticated) {
			return (
				<React.Fragment>
					<li><Link to="/signout">Sign Out</Link></li>
				</React.Fragment>
			);
		}
		return (
			<React.Fragment>
				<li><Link to="/signin">Sign In</Link></li>
				<li><Link to="/signup">Sign Up</Link></li>
			</React.Fragment>
		);
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper container">
					<Link to="/" className="brand-logo">R-app</Link>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						{ this.renderMenu() }
						<li><Link to="/about">About</Link></li>
						<li><Link to="/contact">Contact</Link></li>
						{ this.renderSignout() }
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { authenticated: auth.authenticated };
}

export default connect(mapStateToProps)(Navbar);