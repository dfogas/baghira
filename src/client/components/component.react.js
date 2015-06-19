var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

// generic component for pureRenderMixin
var Component = React.createClass({
  mixins: [PureRenderMixin]
});

module.exports = Component;
