/** @jsx React.DOM */
var React = require('react');
var App = require('./components/App');

var Router = require('react-router');
var routes = require('./routes.js')




Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});




/*
React.render(
  <App />,
  document.getElementById('app'));

*/
