import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import Panel from "../common/pannel/pannel";
import Input from "../common/input/input";
import Submit from "../common/submit/submit";
import { Link } from 'react-router-dom';

import validate from "../common/input/validate_helper";

import './auth.css';

class Signup extends Component {
	submitHandler(values) {
		console.log("Values: ", values);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<Panel>
				<form className="col s12" onSubmit={handleSubmit(this.submitHandler.bind(this))}>
					<Input
						type="text"
						label="Username:"
						name="signup_username"
						containerClass="mb-0"
					/>
					<Input
						type="email"
						label="Email:"
						name="signup_email"
						containerClass="mb-0"
					/>
					<Input
						type="password"
						label="Password:"
						name="signup_password"
						containerClass="mb-0"
					/>
					<Input
						type="password"
						label="Confirm Password:"
						name="signup_confirm_password"
						containerClass="mb-0"
					/>

					<Submit btnText="Sign Up" />
					<Link to="signin" className="btn-link block right mb-5">Sign In</Link>
				</form>
			</Panel>
		);
	}
}


export default reduxForm({
	form: "rapp-signup",
	validate
})(Signup);