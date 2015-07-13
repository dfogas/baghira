var nconf = require('nconf');

// Hierarchical node.js configuration with files, environment variables, command-line arguments, and atomic object merging.
nconf.env('__');

var config = {
  appLocales: ['en', 'fr'],
  defaultLocale: 'en',
  googleAnalyticsId: 'UA-XXXXXXX-X',
  isProduction: process.env.NODE_ENV === 'production',
  piping: {
    // Ignore webpack custom loaders on server
    ignore: /(\/\.|~$|\.(css|less|sass|scss|styl))/,
    // Hook ensures server restart on all required deps, even client side.
    // Server restarting invalidates require cache, no more stale html.
    hook: true
  },
  port: process.env.PORT || 7000,
  version: require('../../package').version,
  webpackStylesExtensions: ['css', 'less', 'sass', 'scss', 'styl']
};

nconf.defaults(config);

module.exports = nconf.get();
