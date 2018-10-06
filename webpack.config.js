const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'development',

    entry: {
        render: path.resolve(__dirname, 'src', 'render.js')
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: 'vue-loader',
            }
        ],
    },
    resolve: {
        extensions: ['*', '.ts', '.vue', '.json', 'scss', '.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
};

if (process.env.NODE_ENV === 'production') {
    module.exports.optimization = {
        minimizer: [new UglifyJsPlugin({
            parallel: true,
            sourceMap: true,
            uglifyOptions: {
                warnings: false,
                parse: {},
                compress: {},
                mangle: true, // Note `mangle.properties` is `false` by default.
                output: null,
                toplevel: false,
                nameCache: null,
                ie8: false,
                keep_fnames: false,
            },
        })]
    }
}
