import React, { Component } from 'react';
import Panel from '../common/pannel/pannel';
import { Link } from 'react-router-dom';

import './wellcome.css';
import '../common/submit/submit.css';

export default class Wellcome extends Component {
	render() {
		return (
			<div>
				<Panel>
					<ul className="wellcome-actions">
						<Link to="/signin" className="center-align waves-effect waves-brown btn ruby">Sign In</Link>
						<Link to="/signup" className="center-align waves-effect waves-brown btn-flat">Sign Up</Link>
					</ul>
				</Panel>
			</div>
		);
	}
}