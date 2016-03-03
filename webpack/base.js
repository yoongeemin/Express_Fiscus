var path = require('path');
var webpack = require("webpack");

module.exports = {
	output: {
		publicPath: "/assets/",
		path: path.resolve(__dirname, "..", "public", "assets"),
	},

	resolve: {
		extensions: ["", ".js", ".jsx"]
	},

	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(true),
		new webpack.optimize.CommonsChunkPlugin("common", "common.js"),
		new webpack.ProvidePlugin({
			jQuery: "jquery",
			$: "jquery",
			_: "lodash"
		})		
	],

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel"
			}
		]
	}		
};
