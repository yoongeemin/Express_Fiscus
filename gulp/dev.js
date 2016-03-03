var path = require('path');
var nodemon = require('gulp-nodemon')

module.exports = function() {
	nodemon({
		script: path.resolve("..", "..", "public", "assets", "server.js"),
		env: { 
			"NODE_ENV": "development",
			"PORT": 8000
		},
		watch: [path.resolve("..", "..", "public", "assets", "**")],
		ext: "js css"
	})
	.on("restart", function() {
		console.log("Server restarted");
	});
};
