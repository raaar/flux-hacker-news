/** @jsx React.DOM */
var React = require('react'),
 	App = require('./components/App'),
	Router = require('react-router'),
 	routes = require('./routes.js');

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});


