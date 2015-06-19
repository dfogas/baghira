var Index = require('./pages/index.react');
var About = require('./pages/about.react');
var Specrunner = require('./pages/specrunner.react');
var NotFound = require('./pages/notfound.react');
var React = require('react');
var ReactRouter = require('react-router');
var NotFoundRoute = ReactRouter.NotFoundRoute;
var Route = ReactRouter.Route;

// pretty simple, aye, name can be used as links in pages
var routes = (
  <Route handler={Index} name="index" path="/">
    <NotFoundRoute handler={NotFound} name="notfound" />
    <Route handler={About} name="about" path="about"/>
    <Route handler={Specrunner} name="specrunner" path="specrunner"/>
  </Route>
);

module.exports = routes;
