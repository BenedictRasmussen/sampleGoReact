const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        'main': './static/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist'
    },

    module: {
        rules: [{
            test: /\.js?$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env'],
                    plugins: [
                        "@babel/plugin-proposal-object-rest-spread",
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            }
        }]
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ]
    }
}
