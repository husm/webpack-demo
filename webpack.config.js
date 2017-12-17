var PostValues = require('postcss-icss-values');
var AutoPrefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: "source-map",
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build/",
        filename: "[name]-[hash].js"
    },
    devServer: {
        contentBase: "./build",
        port: "9000",
        inline: true,
        historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react', 'stage-0']
                } 
            }]
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[path][name]-[local]-[hash:base64:5]'
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            new PostValues(),
                            new AutoPrefixer({
                                browsers: [
                                    '>1%',
                                    'last 4 versions',
                                    'Firefox ESR',
                                    'not ie < 9', // React doesn't support IE8 anyway
                                ],
                                flexbox: 'no-2009',
                            })
                        ]
                    }                    
                }]
            })
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[path][name]-[local]-[hash:base64:5]'
                    }
                }, {
                    loader: 'sass-loader'
                }]
            })
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new ExtractTextPlugin({
            filename: '[name]-[hash].css'
        })
    ]
}