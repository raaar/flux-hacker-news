/** @jsx React.DOM */
var React = 		require('react'),
	AppActions = 	require('../actions/app-actions.js'),
	Catalog = 		require('../components/app-catalog.js'),
	Navigation = 	require('../components/app-navigation.js');
var List = 			require('../components/app-list.js');


var SavedList = 			require('../components/app-savedlist.js');


//var Router = require('react-router'); // or var Router = ReactRouter; in browsers



var App = React.createClass({
	render:function(){
		return (
			<div>
				<header>
					<h1>Hacker News</h1>
				</header>
				<div className="list container">
					<SavedList />

					<List />
				</div>

				<Navigation />
			</div>
		)
	}
})

module.exports = App;