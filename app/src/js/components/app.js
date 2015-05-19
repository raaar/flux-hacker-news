/** @jsx React.DOM */
var React = 		require('react'),
	AppActions = 	require('../actions/app-actions.js'),
	Catalog = 		require('../components/app-catalog.js'),
	Cart = 		require('../components/app-cart.js');

var APP = React.createClass({

	render:function(){
		return (
			<div>
				<Catalog />
				<Cart />
			</div>
		)
	}
})


module.exports = APP;