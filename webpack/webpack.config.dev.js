// "use strict";

// const path = require("path");
// const webpack = require("webpack");

// var assetsPath = path.join(__dirname, "..", "static", "assets");


// module.exports = {
// 	debug: true,
// 	devtool: "eval-source-map",

// 	context: path.join(__dirname, "..", "src"),
	
// 	entry: {
// 		main: [
// 			"",
// 		],
// 	},
// 	output: {
// 		path: path.resolve("./build/bundles/"),
// 		filename: "[name].bundle.js",
// 	},
// 	resolve: { 
// 		alias: {
// 			"bootstrap-css"			: nodePath+"bootstrap/dist/css/bootstrap.min.css",
// 			"bootstrap-theme-css" 	: nodePath+"bootstrap/dist/css/bootstrap-theme.min.css",
// 			"bootstrap-js"			: nodePath+"bootstrap/dist/js/bootstrap.min.js",
// 			"jquery"				: nodePath+"jquery/dist/jquery.min.js",
// 			"jquery-ui" 			: nodePath+"jquery-ui/themes/smoothness/jquery-ui.min.css",
// 			"vticker"				: __dirname+"/app_fiscus/src/components/vticker.js",
// 			"jquery-cookie" 		: __dirname+"/app_common/src/utils/jquery.cookie.js",
// 		}
// 	},
//     // externals: {
//     //     "jquery": "jQuery",
//     // },
//     //     "react": "React",
//     //     "react-dom": "ReactDOM",
//     // },
// 	plugins: [
// 		new BundleTracker({filename: "./webpack-stats.json"}),
// 		// new webpack.optimize.UglifyJsPlugin({minimize: true}),
// 		// new webpack.optimize.CommonsChunkPlugin("common", "common.bundle.js"),
// 		new ExtractTextPlugin("[name].css"),
// 		new webpack.ProvidePlugin({
// 			$: 					"jquery",
// 			jQuery: 			"jquery",
// 			React: 				"react",
// 			ReactDOM: 			"react-dom",
// 			Redux: 				"redux",
// 			ReactRedux: 		"react-redux",
// 			ThunkMiddleware: 	"redux-thunk",
// 			LoggerMiddleware: 	"redux-logger",
// 			Immutable: 			"immutable",
// 			ReactRouter: 		"react-router",
// 			ReduxRouter: 		"react-router-redux",
// 			_: 					"underscore",
// 			_String: 			"underscore.string",
// 			Promise: 			"es6-promise",
// 			History: 			"history",
// 			classNames: 		"classnames",
// 			moment: 			"moment-timezone"
// 		}),
// 	],

// 	module: {
// 		noParse: [],
// 		loaders: [
// 			{
// 				test: /\.jsx?$/, 
// 				exclude: /node_modules/,
// 				loader: "babel-loader",
// 				query: {
// 					plugins: ['transform-runtime'],
// 					presets: ['es2015', 'react', 'stage-0']
// 				}				
// 			},
// 			{
// 				test: /\.(css|scss)$/,
// 				loader: ExtractTextPlugin.extract("style", "css!sass")
// 			},
// 			{
// 				test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/, 
// 				loader: 'url-loader?limit=8192'
// 			},
// 			{
// 				include: /\.json$/,
// 				loaders: ["json-loader"]
// 			}
// 		],
// 	},
// };