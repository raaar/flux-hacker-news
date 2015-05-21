/** @jsx React.DOM */
var React = require('react'),
	AppStore = require('../stores/app-store.js'),
	RemoveFromCart = require('../components/app-removefromcart.js');

var StoreWatchMixin = require('../mixins/StoreWatchMixin.js');


var ListItem = require('../components/app-listitem.js');
var pageName = 'favourites'; 

function items(){
	return {items: AppStore.getSaved()}
}

var SavedList = React.createClass({
	mixins:[StoreWatchMixin(items)],
	/*
	getInitialState: function(){
		return items();
	},
	componentWillMount: function(){
		AppStore.addChangeListener(this._onChange)
	},
    componentWillUnmount:function(){
      AppStore.removeChangeListener(this._onChange)
    },
	_onChange: function(){
		this.setState(items());
	},
	*/

	render: function(){
		var listType = pageName;
		var items = this.state.items.map(function(item, i){
		return (
				<ListItem item={item} key={i} listType={listType}/>	
			)
		})
		
		return (
			<ul>
				{items}
			</ul>
		)
	}
})

module.exports = SavedList;