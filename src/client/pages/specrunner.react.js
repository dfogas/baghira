//var Component = require('../components/component.react');
var DocumentTitle = require('react-document-title');
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var specrunner = React.createClass({
  render: function() {
    return (
      <DocumentTitle title='Specrunner'>
        <div className='specrunner-page'>
          <p>
            You can test me, if you want ...
            <Link to="index">Home</Link>
          </p>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = specrunner;
