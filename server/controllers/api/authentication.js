import passport from "passport";
import crypto from "crypto";
import async from "async";
import config from "../../config/config";

export function signOut(req, res) {
	req.logout();
	res.redirect("/");
}

export function signIn(req, res, next) {
	passport.authenticate("local", {
		successRedirect: "/",
		failureRedirect: "/",
		failureFlash: true
	});
}

export function signUp(req, res, next) {
	// Find user by email
	User.findOne({ email: req.body.email }, function(err, userByEmail) {
		if (userByEmail) {
			req.flash("errors", { err: "Email already exists" })
		}
		else {
			// Find user by mobile
			User.findOne({ phone: req.body.phone }, function(err, userByMobile) {
				if (userByMobile) {
					req.flash("errors", { err: "Phone number already exists" })
				}
				else {
					async.waterfall([
						function(done) {
							crypto.randomBytes(20, function(err, buf) {
								var token = buf.toString("hex");
								done(err, token);
							})
						},
						function(token, done) {
							var user = new User({
								firstName: req.body.firstName,
								lastName: req.body.lastName,
								email: req.body.email,
								mobile: req.body.mobile,
								password: req.body.password
							});

							user.token = token;
							user.tokenExpiration = Date.now() + 3600000 // 1 hour;

							user.save(function(err) {
								done(err, token, user);
							});
						},
						function(token, user, done) {
							var context = {
								protocol: req.protocol,
								domain: config.domain,
								uid: req.user,
								token: token
							};

							var subject = "Activate Your Fiscus Account";
							var html = res.render("activate.email", context);

							sendEmail(user.email, subject, html);
						}
					], function(err) {
						if (err)
							return next(err);
						res.redirect("/");
					});
				}
			});
		}
	});

}

export function activate(req, res, next) {
	// Find user by email
	User.findOne({ 
		id: req.params.uid,
		token: req.params.token,
		tokenExpiration: { $gt: Date.now() }
	}, function(err, user) {
		if (!user) {
	      req.flash("error", "Activation token is invalid or has expired");
		}
		else {
			user.active = true;
			user.save(function(err) {
				done(err, token, user);
			});
			res.redirect("/");
		}
	});	
}

function sendEmail(to, subject, html) {
	var smtpTransport = nodemailer.createTransport("SMTP", {
		service: "Gmail",
		auth: {
			user: config.smtpUser,
			pass: config.smtpPassword
		}
	});

	smtpTransport.sendMail({
		from: config.smtpUser,
		to: to,
		subject: subject,
		html: html
	}, function(err, response) {
		done(err, response);
	});
}

