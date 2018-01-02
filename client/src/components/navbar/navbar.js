import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './navbar.css';

class Navbar extends Component {
	renderAll() {
		if (this.props.isAuth) {
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

	render() {
		return (
			<nav>
				<div className="nav-wrapper container">
					<Link to="/" className="brand-logo">R-app</Link>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						{ this.renderAll() }
						<li><Link to="/about">About</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { isAuth: false };
}

export default connect(mapStateToProps)(Navbar);