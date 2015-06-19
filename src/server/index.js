const config = require('./config');

if (config.isProduction || require('piping')(config.piping)) {
  if (!process.env.NODE_ENV)
    throw new Error('Environment variable NODE_ENV must be set.');

  // Load and use polyfill for ECMA-402.
  //if (!global.Intl)
  //  global.Intl = require('intl');

  // links to node-polyfill for ES6-module feature
  require('babel/register');

  // To ignore webpack custom styles loaders on server.
  config.webpackStylesExtensions.forEach(function(ext) {
    require.extensions['.' + ext] = function() {};
  });

  require('./main');
}
