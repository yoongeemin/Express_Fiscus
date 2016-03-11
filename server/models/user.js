import co from "co";
import bcrypt from "../lib/promises/bcrypt";
import mongoose from "mongoose";
import { AccountSchema } from "./main";

const SALT_ROUNDS = 5;

var UserSchema = new mongoose.Schema({
	active: {
		type: Boolean,
		default: false
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	mobile: {
		type: Number,
		required: false
	},
	password: {
		type: String,
		required: true
	},
	token: String,
	tokenExpiration: Date,
	profile: {
		firstName: {
			type: String,
			required: true,
			lowercase: true
		},
		lastName: {
			type: String,
			required: true,
			lowercase: true
		},
		accounts: [AccountSchema],
		preference: {

		}
	}
});

// Hash user password
UserSchema.pre("save", function(done) {
	var user = this;

	// Only hash the password if it has been added or modified
	if (!user.isModified("password"))
		return done();
	
	co(function* () {
		try {
			var salt = yield bcrypt.genSalt(SALT_ROUNDS);
			var hash = yield bcrypt.hash(user.password, salt);
			user.password = hash;
			done();			
		}
		catch(err) {
			done(err);
		}
	}).then(done);
});

UserSchema.methods = {
	authenticate: function* (password) {
		return yield bcrypt.compare(password, this.password);
	}
};

export default mongoose.model("User", UserSchema);
