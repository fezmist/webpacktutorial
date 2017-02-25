module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            exclude: /node_modules/,
            loader: "style-loader!css-loader"
        }]
    },
    watch: true


}