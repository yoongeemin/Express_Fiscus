var del = require("del");

module.exports = function() {
	del(["public/assets/**", '!public/assets']).then(paths => {
		console.log("Deleted files and folders:\n", paths.join("\n"));
	});
};
