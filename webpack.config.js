const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        disableHostCheck: true,
        port: process.env.PORT || 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                        loader: 'babel-loader'
                     }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                use: [
                        {
                          loader: "babel-loader"
                        },
                        {
                          loader: "react-svg-loader",
                          options: {
                            jsx: true
                          }
                        }
                      ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}