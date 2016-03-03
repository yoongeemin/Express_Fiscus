var prod = require("../prod");
var server = require("./server.base");
var _ = require("lodash");

module.exports = _.merge(prod, server, function(x, y) {
	if (_.isArray(x) && _.isArray(y)) {
		return x.concat(y);
	}
});
