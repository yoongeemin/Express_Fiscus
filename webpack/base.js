const path = require("path");
const webpack = require("webpack");
const Configurator = require("webpack-config");

module.exports = new Configurator().merge({
    output: {
        publicPath: "/assets/",
        path: path.resolve(__dirname, "..", "public", "assets"),
    },

    resolve: {
        extensions: ["", ".js", ".jsx"],
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",
            _: "lodash",
        }),
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
});
