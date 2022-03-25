const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = () => ({
    devtool: "nosources-source-map",
    output: {
        filename: "production.[contenthash].js",
        publicPath: "/build",
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 1000,
            automaticNameDelimiter: '_'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        }),
        new WebpackPwaManifest({
            name: 'My Progressive Web App',
            short_name: 'MyPWA',
            description: 'My awesome Progressive Web App!',
            background_color: '#ffffff',
            crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
            icons: [
              {
                src: path.resolve('./public/favicon.ico'),
                sizes: [64, 32, 24, 16] // multiple sizes
              },
              {
                src: path.resolve('./public/logo512.png'),
                size: '512x512' // you can also use the specifications pattern
              },
              {
                src: path.resolve('./public/logo192.png'),
                size: '512x512',
                purpose: 'maskable'
              }
            ]
        }),
    ]
});