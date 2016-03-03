var dev = require("../dev");
var server = require("./server.base");
var _ = require("lodash");

server.eslint.configFile = path.resolve("..", "..", ".eslintrc.js");

module.exports = _.merge(dev, server, function(x, y) {
	if (_.isArray(x) && _.isArray(y)) {
		return x.concat(y);
	}
});
