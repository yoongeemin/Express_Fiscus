import bcrypt from "bcrypt-nodejs";
import mongoose from "mongoose";
import crypto from "crypto";
import { AccountSchema } from "./fiscus";

var UserSchema = new mongoose.Schema({
	active: {
		type: Boolean,
		default: false
	},
	email: {
		type: String,
		unique: true,
		lowercase: true
	},
	mobile: Number,
	password: String,
	token: String,
	tokenExpiration: Date,
	profile: {
		firstName: String,
		lastName: String,
		accounts: [AccountSchema],
		preference: {

		}
	}
});

// Hash user password
UserSchema.pre("save", function(next) {
	var user = this;
	if (!user.isModified("password"))
		return next();
	
	bcrypt.genSalt(5, function(err, salt) {
		if (err)
			return next(err);
		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if (err)
				return next(err);
			user.password = hash;
			next();
		})
	});
});

UserSchema.methods = {
	authenticate: function(password, cb) {
		bcrypt.compare(password, this.password, function(err, isMatch) {
			if (err)
				return cb(err);
			cb(null, isMatch);
		});
	}
};

export default mongoose.model('User', UserSchema);
