/** @jsx React.DOM */
var React = require('react'),
	AppStore = require('../stores/app-store.js'),
	RemoveFromCart = require('../components/app-removefromcart.js');

var ListItem = require('../components/app-listitem.js');





function latestItems(){
	return {items: AppStore.getStories(),
			listType: 'homepage'
	}
}

function savedItems(){
	return {
		items: AppStore.getSaved(),
		listType: 'favourites'
	}
}

function currentPath(){
	return {path: AppStore.getPath()}
}

function isHomePage(path){
	if (path === '/') {
		return true
	} else {
		return false
	}
}


var List = React.createClass({
	getInitialState: function(){
		return latestItems();
	},
	componentWillMount: function(){
		AppStore.addChangeListener(this._onChange)
	},
	componentWillUnmount: function(){
		AppStore.removeChangeListener(this._onChange)
	},

	
	_onChange: function(){
		this.setState(currentPath())

		if(isHomePage(this.state.path)) {
			this.setState(latestItems());
		} else {
			this.setState(savedItems());
		}  
	},
	render: function(){
		var listType = this.state.listType;
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

module.exports = List;