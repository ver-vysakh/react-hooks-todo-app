const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfiguration = env => require(`./build-utils/webpack.${env}`)(env);
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
    
    module.exports = ({ mode } = { mode: "production" }) => {
        console.log(`mode is: ${mode}`);
    
        return merge(
            {
                mode,
                entry: "./src/index.js",
                devServer: {
                    hot: true,
                    open: true
                },
                output: {
                    publicPath: "/",
                    path: path.resolve(__dirname, "build"),
                    filename: "bundle.js"
                },
                module: {
                    rules: [
                        {
                            test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                            use: [
                                'file-loader'
                            ]
                        },
                        {
                            test: /\.json$/,
                            loader: 'json-loader'
                        },
                        {
                            test: /\.(js|jsx)$/,
                            exclude: /node_modules/,
                            loader: "babel-loader"
                        }
                    ]
                },
                plugins: [
                    new HtmlWebpackPlugin({
                        template: "./public/page-template.hbs",
                        favicon: './public/favicon.ico',
                        title: 'React App',
                        description: 'Web site created using create-react-app'
                    }),
                    new webpack.HotModuleReplacementPlugin(),
                    new CleanWebpackPlugin(),
                ]
            },
            modeConfiguration(mode)
        );
    };