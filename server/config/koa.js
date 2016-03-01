// import express from "express";
// import bodyParser from "body-parser";
// import compression from "compression";
// import cookieParser from "cookie-parser";
// import csrf from "csurf";
// import path from "path";
// import logger from "morgan";
// import session from "express-session";
// import connectMongo from "connect-mongo";
// import methodOverride from "method-override";

// const env = process.env.NODE_ENV || "development";

import logger from "koa-logger";
import json from "koa-json";
import views from "co-views";
import bodyParser from "koa-bodyparser";
import compress from "koa-compress";
import statics from "koa-static";
import config from "./config";

export default function(app, passport) {
	app.use(logger());
	app.use(compress({ threshold: 512 }));
	app.use(json());
	app.use(bodyParser());

	app.use(statics(path.join(config.root, "static")));
	app.use(views(__dirname + '/views', {
		map: { hjs: 'hogan' },
		cache: config.viewCache
	}));

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