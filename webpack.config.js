const path = require("path");

module.exports = {
    entry: "./src/main.ts",
mode: "development",
    output: {
        path: path.join(__dirname, "dist3"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js"
    },

    resolve: {
        extensions: [".js", ".ts"]
    },

    module: {
        rules: [
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
