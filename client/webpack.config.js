
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.(js)$/, 
                use: 'babel-loader' 
            },
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'] 
            },
            {test: /\.less$/, use:["style-loader","css-loader",{loader:"less-loader",options:{lessOptions:{javascriptEnabled:true}}}]}
        ]
    },
    devServer: {
        proxy: {
          '/api': {
            target: 'http://localhost:5000',
            secure: false,
            changeOrigin: true

          },
 
        },
        historyApiFallback: true
    },
    mode: 'development',
    plugins: [

        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ]
}