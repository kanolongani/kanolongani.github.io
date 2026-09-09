const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		assetModuleFilename: 'assets/[hash][ext][query]',
		clean: true,
	},
	devServer: {
		hot: true,
		open: true,
		port: 3000,
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpe?g|gif|pdf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader',
					options: {
						sources: {
							list: [
								'...',
								{
									tag: 'a',
									attribute: 'href',
									type: 'src',
									filter: (tag, attribute, attributes) =>
										/\.(pdf|zip)$/i.test(
											attributes.find((a) => a.name === 'href')?.value || ''
										),
								},
							],
						},
					},
				},
			},
		],
	},
	optimization: {
		minimizer: ['...', new CssMinimizerPlugin()],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			favicon: './src/favicon.png',
		}),
		new MiniCssExtractPlugin(),
	],
};
