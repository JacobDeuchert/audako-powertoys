const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const sveltePreProcess = require('svelte-preprocess');
const CopyPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	entry: {
		'popup': ['./src/popup/popup.ts'],
    'content': ['./src/content/content.ts'],
    'background': ['./src/background.ts'],
		'injected-scripts': ['./src/content/injected-scripts.ts']
	},
	resolve: {
		alias: {
			svelte: path.dirname(require.resolve('svelte/package.json'))
		},
		extensions: ['.mjs', '.js', '.svelte', '.ts'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	
	output: {
		path: path.join(__dirname, '/dist/build'),
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.svelte$/,
				exclude: ['/src/content/inject.ts', '/src/background.ts'],
				use: {
					loader: 'svelte-loader',
					options: {
						compilerOptions: {
							dev: false
						},
						preprocess: sveltePreProcess(),
						emitCss: true,
						hotReload: !prod
					}
				}
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				// required to prevent errors from Svelte on Webpack 5+
				test: /node_modules\/svelte\/.*\.mjs$/,
				resolve: {
					fullySpecified: false
				}
			}
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin(),
		new CopyPlugin({
			patterns: [{
				from: 'src/assets',
				to: 'assets'
			}]
		})
	],
	devtool: false,
	devServer: {
		hot: true
	}
};