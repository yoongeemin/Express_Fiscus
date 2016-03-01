import path from "path";
import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import bootstrapPassport from "./config/passport";
import bootstrapExpress from "./config/express";
import bootstrapRoutes from "./config/routes";
import config from "./config/config";

const app = express();
bootstrapPassport(app, passport);
bootstrapExpress(app, passport);
bootstrapRoutes(app, passport);

connect()
	.on("error", console.error)
	.on("open", listen);

function listen() {
	app.listen(process.env.PORT);
	console.log("Server starting on port: " + process.env.PORT);
}

function connect() {
	return mongoose.connect(config.db).connection;
}

