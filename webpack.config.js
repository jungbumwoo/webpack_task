const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.app.js'
    },
    plugin: [
        new HtmlWebpackPlugin({
            template: 'index.hrml',
            filename: 'index.html'
        })
    ],
    mode: 'development'
};