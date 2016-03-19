const path = require("path");
const nodemon = require("gulp-nodemon");

module.exports = function() {
    nodemon({
        script: path.resolve(__dirname, "..", "public", "server.js"),
        env: {
            "NODE_ENV": "development",
            "PORT": 8000,
        },
    })
    .on("restart", () => {
        console.log("Server restarted");
    });
};
