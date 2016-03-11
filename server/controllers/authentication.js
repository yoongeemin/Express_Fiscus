import passport from "koa-passport";
import crypto from "crypto";
import async from "async";
import nodemailer from "nodemailer";
import config from "../../config/config";
import User from "../../models/user";

export function* signIn() {
	yield* passport.authenticate("local", {
		successRedirect: "/",
		failureRedirect: "/",
		failureFlash: true
	});
}

export function* signOut() {
	this.logout();
	this.session = null;
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

							sendEmail(user.email, subject, html, done);
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

export function activate(req, res) {
	var token = req.params.token;

	// Find user by email
	User.findOne({ 
		id: req.params.uid,
		token: token,
		tokenExpiration: { $gt: Date.now() }
	}, function(err, user, done) {
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

function sendEmail(to, subject, html, done) {
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

