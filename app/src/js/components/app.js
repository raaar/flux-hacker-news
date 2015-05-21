/** @jsx React.DOM */
var React = 		require('react'),
	AppActions = 	require('../actions/app-actions.js'),
 	List = 			require('../components/app-list.js'),
 	SavedList = 			require('../components/app-savedlist.js'),
	Navigation = 	require('../components/app-navigation.js');

var Router = require('react-router'),
 	Link = Router.Link,
	RouteHandler = Router.RouteHandler;


var App = React.createClass({
	render:function(){
		return (
			<div>
				<header>
					<h1>Hacker News</h1>
				</header>
				<div className="list container">

			        {/* this is the important part */}
        			<RouteHandler/>
					
				</div>

				<Navigation />
			</div>
		)
	}
})

module.exports = App;

