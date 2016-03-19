const del = require("del");

module.exports = function(done) {
    del(["public/assets/**", "public/*.js", "!public/assets"]).then(paths => {
        console.log("Deleted files and folders:\n", paths.join("\n"));
        done();
    });
};
