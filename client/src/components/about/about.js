import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import './about.css';

class About extends Component {
	componentWillMount() {
		this.props.getAbout();
	}
	render() {
		return (
			<div>
				<h3>About</h3>
				{ this.props.content }
			</div>
		);
	}
}

function mapStateToProps({ about }) {
	return { content: about.content };
}

export default connect(mapStateToProps, { getAbout: actions.getAbout })(About);