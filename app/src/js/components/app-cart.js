/** @jsx React.DOM */
var React = require('react'),
	AppStore = require('../stores/app-store.js'),
	RemoveFromCart = require('../components/app-removefromcart.js');


function cartItems(){
	return {items: AppStore.getStories()}
}





var Cart = React.createClass({
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
		console.log(this.state.items)
		var items = this.state.items.map(function(item, i){
			return (
				<li>{item.title}  <RemoveFromCart index={i} /></li>
				)
		})
		
		return (
			<ul>
				{items}
			</ul>
		)
	}
})

module.exports = Cart;