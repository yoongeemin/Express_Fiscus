"use strict";
const koa = require("koa");
const mongoose = require("mongoose");
const passport = require("passport");
const bootstrapPassport = require("./config/passport");
const bootstrapKoa = require("./config/koa");
const bootstrapRoutes = require("./config/routes");
const config = require("./config/config");
const LOGGER = require("./lib/logger");

const app = koa();
bootstrapPassport(app, passport);
bootstrapKoa(app, passport);
bootstrapRoutes(app);

function connect() {
	LOGGER.info(`Connecting to mongodb server: ${config.db}`);
    mongoose.connect(config.db);
}

function close() {
	mongoose.connection.close(() => {
		LOGGER.info(`Closing connection to mongodb server: ${config.db}`);
		process.exit(0);
	});
}

function listen() {
	LOGGER.info(`Server starting on port: ${process.env.PORT}`);
    app.listen(process.env.PORT);
}

if (!module.parent) {
	connect();
	mongoose.connection
		.on("connected", () => {
			LOGGER.info(`Connected to mongodb server: ${config.db}`);
			listen();
		});
		.on("disconnected", () => {
			LOGGER.error(`Disconnected from mongodb server`);
			connect();
		}).
		.on("error", (err) => {
			LOGGER.error(`Failed to connect to mongodb server: ${config.db} with error: ${err}`);
		});

	process
		.on("SIGINT", close)
		.on("SIGTERM", close);
}
