import path from "path";
import logger from "koa-logger";
import responeTime from "koa-response-time";
import bodyParser from "koa-bodyparser";
import compress from "koa-compress";
import serve from "koa-static";
import session from "koa-generic-session";
import MongoStore from "koa-generic-session-mongo";
import methodOverride from "koa-methodoverride";
import csrf from "koa-csrf";
import views from "co-views";
import config from "./config";

export default function(app, passport) {
	if (process.env.NODE_ENV === "development")
		app.use(logger());

	app.use(methodOverride());
	app.use(responeTime());
	app.use(compress());
	app.use(bodyParser());	
	app.use(csrf());
	
	app.use(serve(path.resolve(config.root, "public")));	
	app.use(views(__dirname + "/views", {
		map: { hjs: "hogan" },
		cache: config.viewCache
	}));

	app.keys = config.sessionSecret;
	app.use(session({
		cookie: {
			httpOnly: true,
			signed: true
		},
		store: new MongoStore({
			url: config.db,
			ssl : true
		})
	}));
	

	app.use(passport.initialize());
	app.use(passport.session());
};
