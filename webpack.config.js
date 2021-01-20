const path = require("path")

module.exports = {
    target: 'node',
    entry: "./src/index.ts",
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".json"]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    }
}
