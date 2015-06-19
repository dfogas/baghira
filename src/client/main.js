var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var routes = require('./routes');

var app = document.getElementById('app');

// see how it works, my first go bwuha
Router.run(routes, Router.HistoryLocation, function(Handler) {
  // if ('production' !== process.env.NODE_ENV)
  //   console.time('app render on route change'); // eslint-disable-line no-console
  React.render(<Handler />, app, function() {
    // if ('production' !== process.env.NODE_ENV)
    //   console.timeEnd('app render on route change'); // eslint-disable-line no-console
  });
});
