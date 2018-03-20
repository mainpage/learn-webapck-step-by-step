const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        // 自动生成html文件到dist目录
        new HtmlWebpackPlugin({
            template: './src/index.html',   // 源文件
            filename: 'index.html'          // 生成文件名    
        })
    ]
};
