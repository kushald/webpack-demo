var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: ['./index.jsx']
	},

	output: {
		path: './dist',
		filename: "bundle.js"
	},

	module: {
		loaders: [
			{
				test: /\.css/,
				loader: 'style!' + 'css'
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'This is a react app which uses webpack'
		})
	]
};