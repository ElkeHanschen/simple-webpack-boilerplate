const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.min.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.min.css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    devServer: {
        index: 'index.html',
        liveReload: true,
        port: 9000,
    },
};
