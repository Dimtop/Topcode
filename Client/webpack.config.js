const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    entry: './src/index',
    output: {
        path: path.resolve(__dirname,"dist"),
        filename:"bundle.js",
        publicPath:"/"
    },
    module:{
        rules:[
            {test: /\.(js)$/, use:"babel-loader"},
            {test: /\.css$/, use:['style-loader','css-loader']},
            {test: /\.less$/, loader:["css-loader","style-loader",{loader:"less-loader"}]}
        ]
    },
    devServer:{
        historyApiFallback: true,
        proxy:{
            '/': {
                target: 'http://localhost:5000',
                secure: false
              }
        }
    },
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'public/index.html'
        })
    ]
};