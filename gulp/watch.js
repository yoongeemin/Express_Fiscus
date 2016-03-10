var webpack = require("webpack");
var gutil = require("gulp-util");

module.exports = function(config) {
	return function() {
		webpack(config).watch(1000, function(err, stats) {
			if (err) throw new gutil.PluginError("webpack", err);
			gutil.log("[webpack] ", stats.toString());
		});
	};
};
