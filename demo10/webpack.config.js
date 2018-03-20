const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports =  {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        alias: {
            res: path.resolve(__dirname, 'res')
        }
    },
    devtool: 'inline-source-map', //source-map
    devServer: {
        proxy: {
            "/api": "http://localhost:8080"
        },
        port: '9000',
        contentBase: './dist'
    },
    module: {
        rules: [{
            test: /\.jsx?$/, 
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'env'],
                    plugins: [
                        'syntax-dynamic-import'  // babel解析import语句
                    ]
                }
            }],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'  
        }),
        //new webpack.optimize.UglifyJsPlugin()
    ]
};
