import path from "path";
import logger from "koa-logger";
import responeTime from "koa-response-time";
import bodyParser from "koa-bodyparser";
import compress from "koa-compress";
import serve from "koa-static";
import session from "koa-generic-session";
import MongoStore from "koa-generic-session-mongo";
import methodOverride from "koa-methodoverride";
import passport from "koa-passport";
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
	app.use(function* (next) {
		this.render = views(__dirname + "/views", {
			map: { hjs: "hogan" },
			cache: config.viewCache
		});
		yield next;
	});

	app.proxy = true;
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

	// Configure hot reloading
	if (process.env.NODE_ENV === "development") {
		const webpackConfig = require("../../webpack/app/app.dev");
		const devMiddleware = require("webpack-dev-middleware");
		const hotMiddleware = require("webpack-hot-middleware");
		const compiler = require("webpack")(webpackConfig);
		
		app.use(function* (next) {
			yield devMiddleware(compiler, {
				publicPath: webpackConfig.output.publicPath,
				noInfo: true,
				stats: {
					color: true
				}
			}).bind(null, this.req, this.res);
			yield next;
		});

		app.use(function* (next) {
			yield hotMiddleware(compiler, {
				heartbeat: 10*1000,
				reload: true,
				timeout: 20000				
			}).bind(null, this.req, this.res);
			yield next;
		});
	}	
};
