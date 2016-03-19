const path = require("path");
const webpack = require("webpack");
const Configurator = require("webpack-config");

module.exports = new Configurator().merge({
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
