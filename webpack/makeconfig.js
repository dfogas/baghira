/* @flow weak */

'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var NotifyPlugin = require('./notifyplugin');
var webpack = require('webpack');
var path = require('path');

var loaders = {
	'css': '',
	'less': '!less-loader',
	'scss|sass': '!sass-loader',
	'styl': '!stylus-loader'
};

module.exports = function(isDevelopment) {

	// place for stylesLoaders()

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
		module: {
			loaders: [{
				loader: 'url-loader?limit=100000',
				test: /\.(gif|jpg|png|woff|woff2|eot|ttf|svg)$/
			}, {
				exclude: /node_modules/,
				loaders: isDevelopment ? [
					'react-hot', 'babel-loader'
				] : [
					'babel-loader'
				],
				test: /\.js$/
			}].concat()
		},
		output: isDevelopment ? {
			path: path.join(__dirname,'/build.js/'),
			filename: '[name].js',
			publicPath: 'http://localhost:8888/build'
		} : {
			path: path.join(__dirname,'/build.js/'),
			filename: '[name].js'
		},
		// plugins and resolve only as placeholders at this stage
		plugins: (function() {
      var plugins = [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(isDevelopment ? 'development' : 'production'),
            IS_BROWSER: true
          }
        })
      ];
      if (isDevelopment)
        plugins.push(
          NotifyPlugin,
          new webpack.HotModuleReplacementPlugin(),
          // Tell reloader to not reload if there is an error.
          new webpack.NoErrorsPlugin()
        );
      else
        plugins.push(
          // Render styles into separate cacheable file to prevent FOUC and
          // optimize for critical rendering path.
          new ExtractTextPlugin('app.css', {
            allChunks: true
          }),
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.OccurenceOrderPlugin(),
          new webpack.optimize.UglifyJsPlugin({
            compress: {
	              // Because uglify reports so many irrelevant warnings.
              warnings: false
            }
          })
        );
      return plugins;
    })(),
		resolve: {
			extensions: [ '', '.js', '.json']
		}
	}

	return config;

}
