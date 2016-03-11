import { Strategy as LocalStrategy } from "passport-local";
import User from "../../models/user";
import co from "co";

export default new LocalStrategy({ usernameField: "signin" }, signIn);

function signIn(signin, password, done) {
	co(function* () {
		try {
			// Find user by email
			var userByEmail = yield User.findOne({ email: signin }).exec();
			if (userByEmail) return yield* authenticateUser(userByEmail, password, done);
			else {
				// Find user by mobile
				var userByMobile = yield User.findOne({ mobile: signin }).exec();
				if (userByMobile) return yield* authenticateUser(userByMobile, password, done);
				else done(null, false, { message: "Invalid user or password" });
			}
		}
		catch(err) done(err);
	});
}

function* authenticateUser(user, password, done) {
	var match = yield* user.authenticate(password);
	if (match) done(null, user);
	else done(null, false, { message: "Invalid user or password" });
}
