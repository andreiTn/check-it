const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define User model
const userSchema = new Schema({
	email: { type: String, unique: true, lowercase: true },
	password: String
});

userSchema.methods.comparePasswords = function(candidate, callback) {
	bcrypt.compare(candidate.toString(), this.password, function(err, isMatch) {
		if(err) {
			return callback(err);
		}
		return callback(null, isMatch);
	});
}

// Encrypt password on save
userSchema.pre("save", function(next) {
	const user = this;
	bcrypt.genSalt(10, function(err, salt) {
		if(err) {
			return next(err);
		}

		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if(err) {
				return next(err);
			}
			user.password = hash;
			return next();
		});
	});
});

// Create the model
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;
