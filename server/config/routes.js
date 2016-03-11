import * as authenticationControllers from "../controllers/api/authentication";

const API_PREFIX = "/api";

export default function(app) {
	// Local authentication
	app.post(API_PREFIX+"/signin", authenticationControllers.signIn);
	app.get(API_PREFIX+"/signout", authenticationControllers.signOut);
	app.get(API_PREFIX+"/activate/:uid/:token", authenticationControllers.activate);
	app.post(API_PREFIX+"/signUp", authenticationControllers.signUp);

	app.get("*", function(req, res) {
		res.render("app", { });
	});

	//// Error handling
	//app.use(function (err, req, res, next) {
	//	if (err.message
	//		&& (~err.message.indexOf('not found')
	//		|| (~err.message.indexOf('Cast to ObjectId failed')))) {
	//
	//		return next();
	//	}
    //
	//	if (err.stack.includes('ValidationError')) {
	//		res.status(422).render('422', { error: err.stack });
	//		return;
	//	}
    //
	//	// error page
	//	res.status(500).render('500', { error: err.stack });
	//});

	//// 404 Error
	//app.use(function (req, res) {
	//	res.status(404).render('404', {
	//		url: req.originalUrl,
	//		error: 'Not found'
	//	});
	//});
}


