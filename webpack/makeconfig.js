/* @flow weak */

'use strict';

//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

var loaders = [];

module.exports = function(isDevelopment) {
	
	var config = {
		// not yet sure what cache and debug does, but it seems to be harmless at current stage so leaving them as placeholders with some values
		cache: isDevelopment,
		debug: isDevelopment,
		entry: {
			app: isDevelopment ? [
				'webpack-dev-server/client?http://localhost:8888',
				// Why only-dev-server instead of dev-server:
				// https://github.com/webpack/webpack/issues/418#issuecomment-54288041
				'webpack/hot/only-dev-server',
				'./src/client/main'
			] : [
				'./src/client/main'
			]
		},
		// loaders only as placeholder at current stage
		loaders: [{}],
		output: isDevelopment ? {
			path: path.join(__dirname,'/build.js/'),
			filename: '[name].js',
			publicPath: 'http://localhost:8888/build'
		} : {
			path: path.join(__dirname,'/build.js/'),
			filename: '[name].js'
		},
		// plugins and resolve only as placeholders at this stage
		plugins: {},
		resolve: {
			extensions: [ '', '.js', '.json']
		}
	}
	
	return config;
	
}