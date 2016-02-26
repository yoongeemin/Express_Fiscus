var webpack = require("webpack");
var config = require("./webpack.config.base.js");
var _ = require("lodash");

config.debug = true;
config.devtool = "eval-source-map";

// Add webpack hot reloading
_.each(config.entry, function(value, key) {
	key = key.concat([ 
		"webpack-hot-middleware/client"		
		"webpack/hot/only-dev-server"
	]);
});

config.plugins = config.plugins.concat([
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin(),
]);

module.exports = config;
