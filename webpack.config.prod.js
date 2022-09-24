const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/assets/index.html', }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFileName: '[id].css',
            ignoreOrder: false,
        })
    ],
    module: {
        rules: [{
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // MiniCssExtractPlugin.loader, // 这个loader取代style-loader。作用：提取js中的css成单独文件

                    // 将 JS 字符串生成为 style 节点
                    'style-loader',

                    // 将 CSS 转化成 CommonJS 模块
                    'css-loader',

                    // 将 Sass 编译成 CSS
                    'sass-loader',
                ]
            }
        ]
    }
}