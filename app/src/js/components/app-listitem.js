/** @jsx React.DOM */
var React = require('react'),
	AppStore = require('../stores/app-store.js');

var ListItem = React.createClass({
	parseUrl: function(url){
		var r = /:\/\/(.[^/]+)/;
		var parsedURL;
		if( url ) {
	    	return parsedURL = url.match(r)[1];      
	    }
	},

	render: function(){
		return (
			<li>
				<div className="item-inner" >
					<h3>{this.props.item.title}</h3>
					<p>{this.parseUrl(this.props.item.url)}</p>
					<a ref="itemLink" href={this.props.item.url} target="_blank" ></a> 

				</div>
				<a ref="saveDeleteButton" className="button"></a>
			</li>
		)
	}
})

module.exports = ListItem;