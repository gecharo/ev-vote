const { resolve } = require('path');

//plugins
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');

//vars
const CWD = resolve(__dirname, './../');

module.exports = (env, argv) => {
    const DEV = env === 'development';

    const config = {
        mode: env,
        entry: [
            './src/app.js'
        ],
        output: {
            path: resolve(CWD, 'dist'),
            filename: '[name].js'
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            },
            extensions: ['.js', '.vue']
        },
        devServer: {
            contentBase: resolve(CWD, 'dist')
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        name: "vendors",
                        test: /[\\/]node_modules[\\/]/,
                        chunks: "all"
                    }
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.scss$/,
                    use: [
                        DEV ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: DEV,
                                minimize: !DEV,
                                modules: true,
                                localIdentName: DEV ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: DEV,
                                plugins: [autoprefixer('last 2 version')],
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: DEV
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: resolve(CWD, 'src', 'index.html')
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
            }),
            new VueLoaderPlugin()
        ]
    }
    
    return config;
}
