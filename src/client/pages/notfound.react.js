// var Component = require('../components/component.react');
var DocumentTitle = require('react-document-title');
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var notfound = React.createClass({
  render: function() {
    return (
      <DocumentTitle title='Not Found'>
        <div className='notfound-page'>
          <p>
            Sorry, boy, but that's not how I work.
            <Link to="index">Home</Link>
          </p>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = notfound;
