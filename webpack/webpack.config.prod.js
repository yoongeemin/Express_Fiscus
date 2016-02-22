var webpack = require("webpack");
var config = require('./webpack.config.base.js');

config.debug = false;

config.plugins = config.plugins.concat([
	new webpack.optimize.UglifyJsPlugin({minimize: true})
]);

module.exports = config;