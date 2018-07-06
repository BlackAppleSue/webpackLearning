const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    watch: true,
    devtool: 'inline-source-map',
    entry: {
        app: ['./src/index.js', './src/a.js', './src/b.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ab'
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },{
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            outputPath:'images/',
                            publicPath:'dist/'
                        }
                    }
                ]
            }
        ]
    }
}