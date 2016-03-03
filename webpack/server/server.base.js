var path = require("path");

// Resolve binary dependency in node modules
var nodeModules = {};
fs.readdirSync("node_modules")
	.filter(function(mod) {
		return [".bin"].indexOf(mod) === -1;
	})
	.forEach(function(mod) {
		nodeModules[mod] = "commonjs " + mod;
	});

module.exports = {
	target: "node",

	node: {
		__dirname: false,
		__filename: false	
	},

	entry: [ path.resolve(__dirname, "..", "..", ".." "server", "server.js") ],

	output: {
		filename: "server.js"
	},

	externals: nodeModules
};
