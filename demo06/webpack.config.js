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
            test: /\.jsx?$/, 
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'env']
                }
            }],
            exclude: /node_modules/
        }, {
            // 处理css
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            // 处理文件资源
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
