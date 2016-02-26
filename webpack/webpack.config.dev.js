var webpack = require("webpack");
var config = require("./webpack.config.base.js");
var _ = require("lodash");

config.debug = true;
config.devtool = "eval-source-map";

// Add webpack dev server
_.each(config.entry, function(value, key) {
	key = key.concat([ 
		"webpack-dev-server/client?http://localhost:" + config.port,
		"webpack/hot/only-dev-server"
	]);
});

config.plugins = config.plugins.concat([
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin(),
	new webpack.DefinePlugin({
		__ENV__: "DEV"
	})
]);

module.exports = config;
