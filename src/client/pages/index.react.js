//var Component = require('../components/component.react');
var DocumentTitle = require('react-document-title');
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var index = React.createClass({
  render: function() {
    return (
      <DocumentTitle title='Home'>
        <div className='home-page'>
          <p>
            Hello sexy!!
            <Link to="index">Home</Link>
          </p>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = index;
