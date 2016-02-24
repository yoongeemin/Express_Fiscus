var webpack = require("webpack");
var hotMiddlewareScript = "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true";
var config = require("./webpack.config.base.js");
var _ = require("lodash");

config.debug = true;
config.devtool = "eval-source-map";

// Add hot middleware for each entry
_.each(config.entry, function(value, key) {
	key = key.concat([ hotMiddlewareScript ]);
});

config.plugins = config.plugins.concat([
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin(),
	new webpack.DefinePlugin({
		__ENV__: "DEV"
	}),
]);

module.exports = config;
