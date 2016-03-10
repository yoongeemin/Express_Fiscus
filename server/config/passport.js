import local from "./passport/local";
import User from "../models/user";

export default function(app, passport) {
	passport.serializeUser(function(user, done) {
		done(null, user.id)
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		})
	});

	passport.use(local);
}


