var webpack = require("webpack");
var config = require("./webpack.config.base.js");
var _ = require("lodash");

config.debug = true;
config.devtool = "eval-source-map";

// Add webpack hot reloading
_.forEach(config.entry, function(value, key) {
	config.entry[key] = value.concat([ 
		"webpack-hot-middleware/client",
		"webpack/hot/only-dev-server"
	]);
});

config.plugins = config.plugins.concat([
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin()
]);

module.exports = config;



