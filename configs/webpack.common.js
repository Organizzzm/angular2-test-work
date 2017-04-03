var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
	entry: {
		'polyfills': './src/polyfills.ts',
		'vendor': './src/vendor.ts',
		'app': './src/main.ts'
	},

	resolve: {
		extensions: ['.ts', '.js', '.scss', '.html']
	},

	module: {
		// exprContextCritical: false,
		rules: [
			{
				test: /\.ts$/,
				use: [
					{
						loader: '@angularclass/hmr-loader'
					},
					{
						loader: 'awesome-typescript-loader',
						options: {
							configFileName: helpers.root('src', 'tsconfig.json')
						}
					},
					'angular2-template-loader'
				]
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file-loader?name=assets/[name].[hash].[ext]'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					ExtractTextPlugin.extract({
						fallback: "style-loader",
						loader: "styles-loader",
					}),
					'to-string-loader',
					'styles-loader',
					'sass-loader'
				]
			}
		]
	},

	plugins: [
		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)@angular/,
			helpers.root('./src'), {}
		),
		new webpack.NamedModulesPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		}),

		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
};

