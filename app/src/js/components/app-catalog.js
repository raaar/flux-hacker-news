/** @jsx React.DOM */
var React = require('react'),
	AppStore = require('../stores/app-store.js'),
	AddToCart = require('../components/app-addtocart.js');


function getCatalog(){
	return {items: AppStore.getCatalog()}
}


var Catalog = React.createClass({
	getInitialState: function(){
		return getCatalog();
	},
	render: function(){

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