/** @jsx React.DOM */
var React = 		require('react'),
	AppActions = 	require('../actions/app-actions.js'),
	Catalog = 		require('../components/app-catalog.js'),
	List = 			require('../components/app-list.js');
	Navigation = 	require('../components/app-navigation.js');

var APP = React.createClass({

	render:function(){
		return (
			<div>
				<div className="list container">
					<Catalog />
					<List />
				</div>
				<Navigation />
			</div>
		)
	}
})


module.exports = APP;