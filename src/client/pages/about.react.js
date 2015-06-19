//var Component = require('../components/component.react');
var DocumentTitle = require('react-document-title');
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var about = React.createClass({
  render: function() {
    return (
      <DocumentTitle title='About'>
        <div className='about-page'>
          <p>
            I am beautiful and willing Page!
            <Link to="index">Home</Link>
          </p>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = about;
