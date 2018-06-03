const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const StringReplacePlugin = require('string-replace-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var args = require('node-args');

let ENV = args.env || 'development';
const isProduction = ENV === 'production';
const TARGET = `${__dirname}/dest`;


module.exports = {
    devtool: isProduction ? false : 'source-map',
    entry: {
        app: './src/app.jsx',
        login: './src/login.jsx',
    },
    output: {
        path: `${__dirname}/dest`,
        filename: '[name]-[hash].js',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        }, {
            test: /\.css/,
            loader: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader'
                }]
            })
        }, {
            test: /\.less/,
            loader: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader',
                    options: {
                        strictMath: true,
                        plugins: [
                            new LessPluginAutoPrefix({browsers: ['iOS >= 7', 'Android >= 4.3']})
                        ]
                    }
                }]
            })
        }, {
            test: /\.svg$/,
            use: {
                loader: 'svg-url-loader',
                options: {
                    encoding: 'base64'
                }
            }
        }, {
            test: /\.(png|gif|jpg)$/,
            use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
        }, {
            test: /\.(otf|ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader'
        }],
    },
    resolve: {
        alias: require('./webpack.alias.js'),
        extensions: ['.jsx', '.js', '.less'],
    },
    plugins: (function(){
        let plugins = [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor-[hash].js',
                minChunks(module) {
                    const context = module.context;
                    return context && context.indexOf('node_modules') >= 0;
                },
            }),
            new ExtractTextPlugin({
                filename: '[name].[chunkhash:8].css',
                allChunks: true
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                    HOME_PAGE: JSON.stringify('/dashboard'),
                },
            }),
            new webpack.NamedModulesPlugin(),
            new HtmlWebpackPlugin({
                path: `${__dirname}/dest`,
                filename: 'index.html',
                template: `${__dirname}/src/template.ejs`,
                favicon: `${__dirname}/src/favicon.ico`,
                chunks: ['vendor', 'app']
            }),
            new HtmlWebpackPlugin({
                path: `${__dirname}/dest`,
                filename: 'login.html',
                template: `${__dirname}/src/template.ejs`,
                favicon: `${__dirname}/src/favicon.ico`,
                chunks: ['vendor', 'login']
            })
        ];
        if(!isProduction){
            plugins.push(
                new webpack.HotModuleReplacementPlugin(),
                new OpenBrowserPlugin({
                    url: 'http://localhost:5050',
                }),
            );
        }else{
            plugins.push(
                new CleanWebpackPlugin([TARGET]),
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false,
                        screw_ie8: true,
                        conditionals: true,
                        unused: true,
                        comparisons: true,
                        sequences: true,
                        dead_code: true,
                        evaluate: true,
                        if_return: true,
                        join_vars: true,
                    },
                    output: {
                        comments: false,
                    },
                }),
                new ZipPlugin({
                    path: TARGET,
                    filename: 'chatRoom.zip'
                })
            );
        }
        return plugins;
    })(),
    devServer: {
        host: '0.0.0.0',
        port: 5050,
        useLocalIp: true,
        compress: true,
        inline: !isProduction,
        hot: !isProduction,
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                pathRewrite: function (path) {
                    return path.replace('/api', ''); 
                }
            },
        }
    },
};