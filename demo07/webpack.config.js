const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // sourc-map
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'  // webpack-dev-server可访问文件目录
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
            filename: 'index.html'
        })
    ]
};
