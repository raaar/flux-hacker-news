/** @jsx React.DOM */
var React = require('react'),
	AppStore = require('../stores/app-store.js'),
	AddToCart = require('../components/app-addtocart.js');


function getCatalog(){
	return {items: AppStore.getStories()}
}


var Catalog = React.createClass({
	getInitialState: function(){
		return {items: []};
	},
	componentDidMount: function(){
		return getCatalog();
	},

	render: function(){
		console.log(this.state.items)
		var items = this.state.items.map(function(item){
			return (
				<li>{item.title} <AddToCart item={item}/></li>
			)
		})
		
		return (
			<ul>
				{items}
			</ul>
		)
	}
})

module.exports = Catalog;