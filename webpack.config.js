const htmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: `./public/src/index.js`,
    output: {
        path: `${__dirname}/public/dist`
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['env'],
                        plugins: ['transform-runtime']
                    }
                }
            }, {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {}
                }
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin(),
        new htmlWebpackPlugin({ template: './public/src/index.html' })
    ]
}