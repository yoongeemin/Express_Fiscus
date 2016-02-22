import mongoose from "mongoose";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../../models/User";

export default new LocalStrategy(
	{ usernameField: "login" },
	function(login, password, done) {
		// Find user by email
		User.findOne({ email: login }, function(err, userByEmail) {
			if (!userByEmail) {
				// Find user by mobile
				User.findOne({ mobile: login }, function(err, userByMobile) {
					if (!userByMobile) {
						return done(null, false, { message: "Invalid login or password" });
					}
					return authenticateUser(userByMobile, password);
				});
			}
			return authenticateUser(userByEmail, password);
		});
	}
);

function authenticateUser(user, password) {
	return user.authenticate(password, function(err, match) {
		if (match) {
			return done(null, user);
		}
		return done(null, false, { message: "Invalid login or password" })
	});
}

