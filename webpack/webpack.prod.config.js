/**
 * Created by september on 2018/5/27.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpackConfig = require('./webpack.config');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackConfig, {
    mode: "production",
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, '../src/index.prod.js'),
    ],
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
            uglifyOptions: {
                output: {
                    comments: false,
                    beautify: false,
                },
            },
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.template.html'),
            inject: true,
            favicon: path.resolve(__dirname, '../src/assets/favicon.ico'),
            minify: {
                html5: true,
                collapseWhitespace: true,
                removeComments: true,
                removeTagWhitespace: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
            },
        }),
    ],
});