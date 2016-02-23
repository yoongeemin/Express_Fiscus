"use strict";
var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var fs = require("fs");

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
		server: [ path.join(__dirname, "..", "server", "server.js") ],
		authentication: [ path.join(__dirname, "..", "client", "authentication.jsx") ],
		app: [ path.join(__dirname, "..", "client", "app.jsx") ]
	},

	output: {
		path: path.join(__dirname, "..", "static", "build"),
		filename: "[name].js"
	},

	externals: nodeModules,

	resolve: {
		extensions: ["", ".js", ".jsx", ".css", ".scss"]
	},

	plugins: [
		// new webpack.optimize.CommonsChunkPlugin("common", "common.bundle.js"),
		new ExtractTextPlugin("[name].css"),

		new webpack.ProvidePlugin({
			$: 		"jquery",
			jQuery: "jquery",
			_: 		"lodash",
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

