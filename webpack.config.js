var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry: './source/js/main.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
			// filename: "app/[name]-[hash].js",
			// publicPath: '/assets/'
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
					'scss': 'vue-style-loader!css-loader!sass-loader',
					'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
				}
			}
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ["es2015", "stage-2"],
				plugins: ['transform-runtime']
			}
		}, {
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'file-loader?name=images/[name].[ext]?[hash]',
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loaders: ['style-loader', 'css-loader']
		}]
	},
	resolve: {
		extensions: ['', '.js', '.json', '.vue', '.scss', '.css'],
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	},
	devServer: {
		contentBase: './build',
		historyApiFallback: true
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map'
}


if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
		// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			comments: false,
			compress: {
				warnings: false
			}
		})
	])
}
