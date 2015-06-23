var App = require('./app/app.react');
var Home = require('./pages/home.react');
var About = require('./pages/about.react');
var Specrunner = require('./pages/specrunner.react');
var NotFound = require('./pages/notfound.react');
var React = require('react');
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

// pretty simple, aye, name can be used as links in pages

export default (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} name="index" />
    <NotFoundRoute handler={NotFound} name="notfound" />
    <Route handler={About} name="about" />
    <Route handler={Specrunner} name="specrunner" />
  </Route>
);

// var routes = (
//   <Route handler={Index} name="index" path="/">
//     <NotFoundRoute handler={NotFound} name="notfound" />
//     <Route handler={About} name="about" path="about"/>
//     <Route handler={Specrunner} name="specrunner" path="specrunner"/>
//   </Route>
// );

// module.exports = routes;
