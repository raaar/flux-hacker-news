var React = require('react');

var App = require('./components/App'),
	List = 			require('./components/app-list.js'),
	SavedList = 			require('./components/app-savedlist.js');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" path="/" handler={List}/>
    <Route name="saved" handler={SavedList}/>
    <DefaultRoute handler={List}/>
  </Route>
);

module.exports = routes;