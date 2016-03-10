var webpack = require("webpack");
var path = require("path");
var _ = require("lodash");
var dev = require("../dev");
var app = require("./app.base");

// Add webpack hot reloading
app.entry = app.entry.concat([
	"webpack-hot-middleware/client",
	"webpack/hot/only-dev-server"
]);

app.plugins = app.plugins.concat([
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin()	
]);

app.eslint = {
	configFile: path.resolve(__dirname, "..", "..", ".eslintrc.react")
};

module.exports = _.merge(dev, app, function(x, y) {
	if (_.isArray(x) && _.isArray(y)) {
		return x.concat(y);
	}
});
