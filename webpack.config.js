var path = require("path");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var webpack = require("webpack");

module.exports = {
    context: path.resolve("src"), //Find entry files in this path...
    entry: [
        path.resolve(__dirname, "src/index")
    ],
    target: "web",
    watch: true,
    output: {
        path: path.join(__dirname, "dist"), //Production builds put files here...
        publicPath: "/", //Dev server"s asset path, should match those in index.html...
        filename: "bundle.js"
    },
    devServer: {
        historyApiFallback: true, //Needs to be enabled when using browserHistory and webpack dev server...
        contentBase: "./src"
    },
    resolve: {
        alias: {
            "jquery-ui/datepicker": "jquery-ui/ui/widgets/datepicker"
        }
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "./index.html", to: "./index.html" },
            { from: "./img/**/*" }
        ]),
        new webpack.DefinePlugin({
            "process.env": {
                "API_URL": JSON.stringify("http://localhost:54143/api")
            }
        })
    ],
    module: {
        // preLoaders: [
        //     { 
        //         test: /\.js$/, 
        //         exclude: /node_modules/,
        //         loader: "eslint-loader"
        //     }
        // ],
        loaders: [
            { test: /\.js$/, include: path.join(__dirname, "src"), loaders: ["babel"] },
            { test: /\.css$/, loaders: ["style", "css"] },
            { test: /\.less$/, loaders: ["style", "css", "less"] },
            { test: /\.html$/, include: /src/, loader: 'ngtemplate?relativeTo=' + path.resolve(__dirname, './src') + '/!html'},
            { test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    }
};