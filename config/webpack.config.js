const { resolve } = require('path');

// plugins
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

// vars
const CWD = resolve(__dirname, './../');
const browsers = ['last 2 version'];

module.exports = (env) => {
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
                vue$: 'vue/dist/vue.esm.js'
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
                        name: 'vendors',
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'all'
                    }
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        hotReload: DEV
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules[\\/]/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [['env', {
                                targets: {
                                    browsers
                                },
                                modules: false
                            }]]
                        }
                    }
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
                                plugins: [autoprefixer(browsers)]
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
                filename: '[name].css'
            }),
            new VueLoaderPlugin(),
            new CopyWebpackPlugin([
                {
                    from: 'src/assets/',
                    to: 'assets/'
                }
            ])
        ]
    };

    if (DEV) {
        Object.assign(config, {
            devtool: 'eval-source-map'
        });
    }

    return config;
};
