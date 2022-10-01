const path = require('path');

module.exports = (env) => {
	return {
		mode: 'development',
		entry: './src/app.ts',
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist'),
			publicPath: 'dist',
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
			],
		},
		resolve: {
			resolve: {
				fallback: {
					fs: false,
				},
				extensions: ['.ts', '.js'],
			},
		},
		devServer: {
			contentBase: './dist',
		},
	};
};
