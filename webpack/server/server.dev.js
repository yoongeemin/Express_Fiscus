var path = require("path");
var _ = require("lodash");
var dev = require("../dev");
var server = require("./server.base");

server.eslint = {
	configFile: path.resolve(__dirname, "..", "..", ".eslintrc.es6")
};

module.exports = _.merge(dev, server, function(x, y) {
	if (_.isArray(x) && _.isArray(y)) {
		return x.concat(y);
	}
});
