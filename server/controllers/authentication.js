const User = require("../models/user");
const jwt = require('jwt-simple');
const config = require("../config");

function tokenForUser(user) {
	return jwt.encode({ sub: user.id }, config.secret);
}

module.exports.signup = function (req, res, next) {
	let { email, password } = req.body;
	if (!email || !password) {
		return res.status(422).send({ error: "You must provide both email and password" });
	}

	// See if a user with the given email exists
	User.findOne({ email }, function (err, user) {
		if (err) return next(err);

		// If email does exits, retur an error
		if (user) {
			return res.status(422).send({ error: "Email already in use" });
		}

		// If email does NOT exit create and save record
		const newUSer = new User({ email, password });

		newUSer.save(function (err, success) {
			if (err) return next(err);
			// Respond to request, indicating that user was created
			res.json({ token: tokenForUser(newUSer) });
		});
	});
};


module.exports.signin = function (req, res, next) {
	return res.send({ token: tokenForUser(req.user) });
}