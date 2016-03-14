const path = require("path");
const Configurator = require("webpack-config");

console.log(path.resolve("./server.base"));

module.exports = new Configurator()
.extend(path.resolve(__dirname, "server.base"))
.extend(path.resolve(__dirname, "..", "dev"))
.merge({
    eslint: {
        configFile: path.resolve(__dirname, "..", "..", ".eslintrc.es6"),
    },
});
