/** @jsx React.DOM */
var React = require('react');

var List = 			require('./components/app-list.js');
var Catalog = 		require('./components/app-catalog.js');


var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


var routes = {(
  <Route name="app" path="/" handler={App}>
    <Route name="saved" handler={Catalog}/>
    <DefaultRoute handler={List}/>
  </Route>
)};

module.exports = routes;
