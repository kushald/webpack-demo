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
				test: /\.css$/,
				loader: 'style!' + 'css'
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'This is a react app which uses webpack'
		})
	]
};
