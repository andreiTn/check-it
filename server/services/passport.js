const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;

// Create  a local strtegy.
let localOptions = { usernameField: 'email', session: false };
const localLogin = new LocalStrategy(localOptions, function (email, password, done) {
	// Verify the username and password, call done with the user
	// if it is the correct user.
	// Otherwise call done with false.
	User.findOne({ email })
		.then(user => {
			if (!user) {
				return done(null, false);
			}

			// compare password with user.password
			user.comparePasswords(password, function (err, isMatch) {
				if (err) {
					return done(err);
				}
				if (!isMatch) { return done(null, false); }

				return done(null, user);
			});
		})
		.catch(err => done(err));

});

// Setup options for JWT Strategy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

// Create a JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
	// See if the user id in the payload exists in db
	// If it does, call done with that user
	// Otherwise, call done without a user object
	User.findById(payload.sub)
		.then(user => {
			if (user) {
				return done(null, user);
			}
			return done(null, false);
		})
		.catch(err => done(err, false));

});

// Tell passport to use 
passport.use(jwtLogin);
passport.use(localLogin);