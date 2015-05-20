/** @jsx React.DOM */
var React = 		require('react'),
	AppStore = require('../stores/app-store.js');

	//AppActions = 	require('../actions/app-actions.js'),

var ListItem = require('../components/app-listitem.js');


function cartItems(){
	return {items: AppStore.getSaved()}
}


var List = React.createClass({
	getInitialState: function(){
		return cartItems();
	},
	componentWillMount: function(){
		AppStore.addChangeListener(this._onChange)
	},
	_onChange: function(){
		this.setState(cartItems())
	},
	render: function(){
		var items = this.state.items.map(function(item, i){
		return (
				<ListItem item={item} key={i}/>	
			)
		})
		
		return (
			<ul>
				{items}
			</ul>
		)
	}
})

module.exports = List;