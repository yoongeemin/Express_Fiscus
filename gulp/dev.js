const path = require("path");
const nodemon = require("gulp-nodemon");

module.exports = function() {
    nodemon({
        script: path.resolve(__dirname, "..", "public", "assets", "server.js"),
        env: {
            "NODE_ENV": "development",
            "PORT": 8000,
        },
        watch: [path.resolve(__dirname, "..", "public", "assets", "*")],
        ext: "js css",
    })
    .on("restart", () => {
        console.log("Server restarted");
    });
};
