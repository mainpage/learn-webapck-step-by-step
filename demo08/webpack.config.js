const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports =  {
    entry: {
        index: './src/index.js',
        about: './src/about.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        alias: {
            res: path.resolve(__dirname, 'res')
        }
    },
    devtool: 'inline-source-map', 
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [{
            test: /\.jsx?$/, 
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'env']
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
            filename: 'index.html',         
            chunks: ['common', 'index']
        }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            filename: 'about.html',
            chunks: ['common', 'about']
        }),
        // 提取公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'    // 指定公共 bundle 的名称。
        })
    ]
};
