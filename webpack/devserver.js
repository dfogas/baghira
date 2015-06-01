/* @flow weak */

var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

module.exports = function (webpackConfig) {
	return function (callback) {
		new WebpackDevServer( webpack(webpackConfig), {
			contentBase: 'http://localhost/8888',
			publicPath: webpackConfig.output.publicPath,
			stats: {}
		} ).listen( 8888, 'localhost', function(err) {
			if (err)
				throw new PluginError('webpack-dev-server', err);
			gutil.log('webpack-dev-server', 'localhost:8888/build/client.js');
			callback();
		} );
	};
};