const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader?importLoaders=1!postcss-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('/bundle.css')
    ]
};

module.exports = config;

/**
 * Prod minification
 new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
 */