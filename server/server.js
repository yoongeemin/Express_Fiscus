import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import bootstrapPassport from "./config/passport";
import bootstrapExpress from "./config/express";
import bootstrapRoutes from "./config/routes";
import path from "path";
import config from "./config/config";

const app = express();
bootstrapPassport(app, passport);
bootstrapExpress(app, passport);
bootstrapRoutes(app, passport);

connect()
	.on("error", console.error)
	.on("open", listen);

function listen() {
	app.listen(__PORT__);
	console.log("Server starting on port: " + __PORT__);
}

function connect() {
	return mongoose.connect(config.db).connection;
}


