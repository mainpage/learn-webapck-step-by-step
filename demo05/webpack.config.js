const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            // 使用babel-loader处理js/jsx文件
            test: /\.jsx?$/, 
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'env']
                }
            }],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'  
        })
    ]
};
