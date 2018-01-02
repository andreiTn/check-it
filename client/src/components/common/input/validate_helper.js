export default function(values) {
	const errors = {};

	if (!values.signin_email) {
		errors.signin_email = "Please enter a valid email";
	}

	if (!values.signin_password) {
		errors.signin_password = "Please enter a password";
	}

	return errors;
}