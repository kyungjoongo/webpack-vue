let path = require('path'),
    webpack = require('webpack'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    FaviconsWebpackPlugin = require('favicons-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'),
    notifier = require('node-notifier');

let ICON = path.join(__dirname, './source/img/icon.png');
let NODE_ENV = process.env.NODE_ENV;

var imageLoader = ['file-loader?name=img/[name]-[hash:7].[ext]'];
// Optimize images for production build

if (NODE_ENV === 'production') {
    imageLoader.push({
        loader: 'image-webpack-loader',
        query: {
            mozjpeg: {
                progressive: true,
            },
            gifsicle: {
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 4,
            },
            pngquant: {
                quality: '75-90',
                speed: 3,
            },
        },
    });
}


module.exports = {
    entry: {
        js: './source/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'www/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    'scss': 'vue-style-loader!css-loader!sass-loader',
                    'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                },
                transformToRequire: {
                    video: ['src','poster'],
                    source: 'src'
                }
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader?cacheDirectory',
            exclude: /node_modules/,
            options: {
                presets: ["es2015", "stage-2"],
                plugins: ['transform-runtime']
            }

        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: ['style-loader', 'css-loader', 'sass-loader?sourceMap']
        }, {
            test: /\.(otf|ttf|woff)$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
        }, {
            test: /\.(mpeg|mp4|webm|ogv)$/,
            loader: 'file-loader?name=videos/[name].[ext]'
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: imageLoader
        }]
    },
    resolve: {
        extensions: ['.js', '.json', '.vue', '.scss'],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'components': path.resolve(__dirname, 'source/components'),
            'sass': path.resolve(__dirname, 'source/sass'),
            'js': path.resolve(__dirname, 'source/js')
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        host: '0.0.0.0',
        port: 3000,
        quiet: true
    },
    performance: {
        hints: false
    },
    devtool: 'eval',
    plugins: [
        new FriendlyErrorsWebpackPlugin({
            onErrors: (severity, errors) => {
                if (severity !== 'error') {
                    return;
                }
                const error = errors[0];
                notifier.notify({
                    title: 'Error!',
                    message: severity + ': ' + error.name,
                    subtitle: error.file || '',
                    icon: ICON,
                    timeout: 2
                });
            }
        }),
        new HtmlWebpackPlugin({
            template: 'source/index.html',
            hash: true
        }),
        new FaviconsWebpackPlugin({
            logo: './source/img/icon.png',
            prefix: 'favicon/[hash]-',
            emitStats: false,
            statsFilename: 'iconstats-[hash].json',
            persistentCache: true,
            inject: true,
            title: 'Prototype',
            icons: {
                android: false,
                appleIcon: true,
                appleStartup: false,
                coast: false,
                favicons: true,
                firefox: false,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false
            }
        })
    ]
}

// Fix for error messages
process.noDeprecation = true;


if (NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new CleanWebpackPlugin(['www'], {
            exclude: ['favicon']
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            comments: false,
            compress: {
                warnings: false
            }
        }),
        // Required for ios add-t-home icon
        new CopyWebpackPlugin([
            { from: './source/server/.htaccess', to: 'favicon/' }
        ])
    ])
}


if (NODE_ENV === 'fast') {
    module.exports.devtool = '#eval'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new CopyWebpackPlugin([
            { from: './source/misc/.htaccess', to: 'favicon/' }
        ])
    ])
}
