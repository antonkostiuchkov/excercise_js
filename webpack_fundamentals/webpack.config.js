var path = require('path');

module.exports = {
    context: path.resolve('app/js'),
    entry: ['./utils', './app'],
    output: {
        // path: path.resolve('app/js/'),
        // publicPath: '/public/assets/js/',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: 'app/templates'
    },

    module: {
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style!css!autoprefixer"
            },
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                loader: "style!css!autoprefixer!stylus"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    }
};