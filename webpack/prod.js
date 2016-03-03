var base = require("./base");

base.debug: false;

base.plugins = base.plugins.concat([
	new webpack.optimize.DedupePlugin(),
	
	new webpack.optimize.UglifyJsPlugin({
		minimize: true,
		sourceMap: false
	})
]);

module.exports = base;
