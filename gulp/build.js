var webpack = require("webpack");
var gutil = require("gulp-util");

module.exports = function(config) {
	return function(callback) {
		webpack(config).run(function(err, stats) {
			if(err) throw new gutil.PluginError("webpack", err);
			gutil.log("[webpack] ", stats.toString());
			callback();
		});
	};
};
