const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    watch: true,
    devtool: 'inline-source-map',
    entry: {
        app: ["babel-polyfill", './src/index.js', './src/a.js', './src/b.js', './src/test.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ab',
            template: 'index.html',
            inject: true
        }),
        new VueLoaderPlugin()
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            }
            ,
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
            , {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/',
                            publicPath: 'dist/'
                        }
                    }
                ]
            }, {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.vue', '.tsx', '.ts', '.js'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
}