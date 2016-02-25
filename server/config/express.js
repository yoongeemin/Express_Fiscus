import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import csrf from "csurf";
import path from "path";
import logger from "morgan";
import session from "express-session";
import connectMongo from "connect-mongo";
import methodOverride from "method-override";
import config from "./config";

const env = process.env.NODE_ENV || "development";

export default function(app, passport) {
	// Disable X-Powered-By header to prevent attacks
	app.disable('x-powered-by');

	app.use(logger(env));
	app.use(compression({ threshold: 512 }));
	app.use(methodOverride());

	app.use(express.static(path.join(config.root, "static")));
	app.set("views", path.join(config.root, "server/views"));
	app.set("view engine", "hjs");
	app.set("layout", "layouts/base");
	app.set("view cache", config.viewCache);

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
