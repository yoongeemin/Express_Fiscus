import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import csrf from "csurf";
import path from "path";
import session from "express-session";
import connectMongo from "connect-mongo";
import config from "./config";

const env = process.env.NODE_ENV || "development";

module.exports = function(app, passport) {
	// Disable X-Powered-By header to prevent attacks
	app.disable('x-powered-by');

	// Compression middleware
	app.use(compression({ threshold: 512 }));

	// Static files middleware
	app.use(express.static(config.root + "/static"));
	app.set("view cache", config.viewCache);
	app.set("views", config.root + "/app/views");
	app.set("view engine", "html");

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(cookieParser());

	var MongoStore = connectMongo(session);
	app.use(session({
		resave: true,
		saveUninitialized: false,
		secret: config.sessionSecret,
		proxy: true,
		name: "sessionId",
		cookie: {
			httpOnly: true,
			secure: false
		},
		store: new MongoStore({
			url: config.db,
			autoReconnect: true
		})
	}));

	app.use(csrf());
	
	// Required for Heroku deployment
	app.set('trust proxy', 'loopback');

	app.use(passport.initialize());
	app.use(passport.session());
};
