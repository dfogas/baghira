import React from 'react';

var Html = React.createClass({
  render: function() {
    // styles link when production, dev handled by live reload
    // const linkStyles = this.props.isProduction &&
    //   <link
    //     href={`/build/app.css?v=${this.props.version}`}
    //     rel="stylesheet"
    //   />;

    return (
      <html lang='en'>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
        <title>{this.props.title}</title>
        <body dangerouslySetInnerHTML={{__html: this.props.bodyHtml}} />
      </html>
    );
  }
});

Html.propTypes = {
  bodyHtml: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  // isProduction: React.PropTypes.bool.isRequired,
  // version: React.PropTypes.string.isRequired
};

module.exports = Html;
