import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import configureExpress from "./config/express";
import configureRoutes from "./config/routes";
import config from "./config/config";
// var express = require("express");
// var mongoose = require("mongoose");
// var passport = require("passport");
// var configureExpress = require("./config/express");
// var configureRoutes = require("./config/routes");

const app = express();

configureExpress(app, passport);
configureRoutes(app, passport);

connect()
	.on("error", console.log)
	.on("disconnected", connect)
	.on("open", listen);

function listen() {
	if (app.get("env") !== "test") {
		const port = process.env.PORT || 8080;
		app.listen(port);
		console.log("Starting on port: " + port);
	}
}

function connect() {
	return mongoose.connect(config.db).connection;
}
