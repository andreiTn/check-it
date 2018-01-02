import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import Panel from "../common/pannel/pannel";
import Input from "../common/input/input";
import Submit from "../common/submit/submit";
import validate from "../common/input/validate_helper";

import './auth.css';

class Signin extends Component {
	submitHandler(values) {
		console.log("Values: ", values);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<Panel>
				<form className="col s12" onSubmit={handleSubmit(this.submitHandler.bind(this))}>
					<Input
						type="email"
						label="Email:"
						name="forgot_pass_email"
						containerClass="mb-0"
					/>

					<Submit btnText="Reset Password" />
					<Link to="/signin" className="btn-link block right mb-5">Sign In</Link>
				</form>
			</Panel>
		);
	}
}


export default reduxForm({
	form: "rapp-forgot-pass",
	validate
})(Signin);