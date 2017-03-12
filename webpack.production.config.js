var config = require("./webpack.config.js");
var webpack = require("webpack");

var productionPlugin = 
    new webpack.DefinePlugin({
        "process.env": {
            "API_URL": JSON.stringify("http://ft-nba.gear.host/api")
        }
    });

config.plugins.pop();
config.plugins.push(productionPlugin);

module.exports = config;