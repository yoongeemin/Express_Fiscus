var dev = require("../dev");
var app = require("./app.base");
var _ = require("lodash");

// Add webpack hot reloading
app.entry = app.entry.concat([
	"webpack-hot-middleware/client",
	"webpack/hot/only-dev-server"
]);

app.plugins = app.plugins.concat([
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin()	
]);

app.eslint.configFile = path.resolve("..", "..", ".eslintrc.react");

module.exports = _.merge(dev, app, function(x, y) {
	if (_.isArray(x) && _.isArray(y)) {
		return x.concat(y);
	}
});
