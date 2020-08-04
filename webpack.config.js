const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'min.main.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    devtool: 'inline-source-map', /* tracks js errors to source js, do NOT use for production */
    devServer: {
        contentBase: './dist',
    },
};
