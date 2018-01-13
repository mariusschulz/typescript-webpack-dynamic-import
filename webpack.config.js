const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/main.ts",

    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js"
    },

    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                include: path.join(__dirname, "src"),
                loader: "ts-loader"
            }
        ]
    },

    devServer: {
        contentBase: "./dist"
    }
};
