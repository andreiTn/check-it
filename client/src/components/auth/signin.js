import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Panel from "../common/pannel/pannel";
import Input from "../common/input/input";
import Submit from "../common/submit/submit";
import validate from "../common/input/validate_helper";

import './auth.css';

class Signin extends Component {
	render() {
		const { handleSubmit, signinUser } = this.props;
		
		return (
			<Panel>
				<form className="col s12" onSubmit={handleSubmit(signinUser.bind(this)) }>
					<Input
						type="email"
						label="Email:"
						name="email"
						containerClass="mb-0"
					/>
					<Input
						type="password"
						label="Password:"
						name="password"
					/>
					
					<Submit btnText="Sign In" />
					<Link to="/signup" className="btn-link block left mb-5">Sign Up</Link>
					<Link to="/forgot-password" className="btn-link block right mb-5">Forgot Password</Link>
				</form>
			</Panel>
		);
	}
}


export default reduxForm({
	form: "rapp-signin",
	validate
})(
	connect(null, { signinUser: actions.signinUser })(Signin)
);