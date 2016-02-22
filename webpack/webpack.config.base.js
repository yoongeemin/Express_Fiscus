"use strict";
var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var fs = require("fs");
var hotMiddlewareScript = "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true";

// Resolve binary dependency in node modules
var nodeModules = {};
fs.readdirSync("node_modules")
	.filter(function(x) {
		return [".bin"].indexOf(x) === -1;
	})
	.forEach(function(mod) {
		nodeModules[mod] = "commonjs " + mod;
	});

module.exports = {
	target: "node",

	entry: {
		server: [ path.join(__dirname, "..", "server", "server.js"), hotMiddlewareScript ],
		// app: [ path.join(__dirname, "..", "app", "index.js"), hotMiddlewareScript ]
	},

	output: {
		path: path.join(__dirname, "..", "static", "build"),
		filename: "[name].dev.js"
	},

	externals: nodeModules,

	plugins: [
		// new webpack.optimize.CommonsChunkPlugin("common", "common.bundle.js"),
		new ExtractTextPlugin("[name].css"),

		new webpack.ProvidePlugin({
			$: 					"jquery",
			jQuery: 			"jquery",
		})
		// 	React: 				"react",
		// 	ReactDOM: 			"react-dom",
		// 	Redux: 				"redux",
		// 	ReactRedux: 		"react-redux",
		// 	ThunkMiddleware: 	"redux-thunk",
		// 	LoggerMiddleware: 	"redux-logger",
		// 	Immutable: 			"immutable",
		// 	ReactRouter: 		"react-router",
		// 	ReduxRouter: 		"react-router-redux",
		// 	Promise: 			"es6-promise",
		// 	History: 			"history",
		// 	classNames: 		"classnames",
		// 	moment: 			"moment-timezone"
		// }),
	],

	module: {
		loaders: [
			{
				test: /\.js$|\.jsx$/,
				exclude: /node_modules/,
				loader: "babel",
				query: {
					plugins: ["transform-runtime"],
					presets: ["es2015", "react", "stage-0"]
				}
			},
			{
				test: /\.(css|scss)$/,
				loader: ExtractTextPlugin.extract("style", "css!sass")
			},
			{
				test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/, 
				loader: "url-loader?limit=8192"
			},
			{
				include: /\.json$/,
				loaders: ["json-loader"]
			}
		],
	},
};

