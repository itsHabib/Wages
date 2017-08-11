const path = require('path')
const webpack = require('webpack')


module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'inline-source-map',
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
				]

			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'


				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			}
		]
	}
}