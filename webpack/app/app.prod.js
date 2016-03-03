var prod = require("../prod");
var app = require("./app.base");
var _ = require("lodash");

module.exports = _.merge(prod, app, function(x, y) {
	if (_.isArray(x) && _.isArray(y)) {
		return x.concat(y);
	}
});
