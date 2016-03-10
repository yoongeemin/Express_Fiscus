var base = require("./base");

base.debug = true;
base.devtool = "eval-cheap-module-source-map";

base.module.preLoaders = [
	{
		test: /\.jsx?$/,
		exclude: /node_modules/,
		loader: "eslint-loader"
	}
];

module.exports = base;
