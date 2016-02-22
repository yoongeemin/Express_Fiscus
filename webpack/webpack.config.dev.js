var webpack = require("webpack");
var config = require('./webpack.config.base.js');

config.debug = true;
config.devtool = "eval-source-map";

config.plugins = config.plugins.concat([
	new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;