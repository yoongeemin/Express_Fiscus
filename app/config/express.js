import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import csrf from "csurf";
import config from "./config";


// const express = require('express');
// const bodyParser = require('body-parser');
// const compression = require('compression');
// const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
// const csrf = require('csurf');
// const config = require('./config');



const env = process.env.NODE_ENV || "development";

// export default function(app, passport) {
module.exports = function(app, passport) {
	// Compression middleware
	app.use(compression({
		threshold: 512
	}));

	// Static files middleware
	// app.use(express.steatic(config.root + "/public"));

	var log = "dev";
	// Logging middleware
	if (env !== "test") {
		app.use(morgan(log));
	}

	// app.engine("html", swig.renderFile);
	app.set("views", config.root + "/app/views")
	app.set("view engine", "html");

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(cookieParser());
	app.use(passport.initialize());

	// CSRF token middleware
	if (env !== "test") {
		app.use(csrf());
		app.use(function (req, res, next) {
			res.locals.csrf_token = req.csrfToken();
			next();
		});
	}
};
