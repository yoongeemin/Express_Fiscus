import { Strategy as LocalStrategy } from "passport-local";
import User from "../../models/user";

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
					return authenticateUser(userByMobile, password, done);
				});
			}
			return authenticateUser(userByEmail, password, done);
		});
	}
);

function authenticateUser(user, password, done) {
	return user.authenticate(password, function(err, match) {
		if (match) {
			return done(null, user);
		}
		return done(null, false, { message: "Invalid login or password" })
	});
}

