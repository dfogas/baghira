'Copyright David Fogas 2015, MIT license'

'use strict'

var webpack = require('webpack');

module.exports = function (webpackConfig) {
	return function (callback) {
		webpack(webpackConfig, function ( fatalError, stats) {
			
			callback();
		});
	}
}