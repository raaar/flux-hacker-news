/** @jsx React.DOM */
var React = require('react'),
	AppStore = require('../stores/app-store.js');
var AppActions = require('../actions/app-actions.js');


var ListItem = React.createClass({

	editFavourites: function(e){
		e.preventDefault();
		var item = this.refs.item.getDOMNode();

		if (this.props.listType === 'topstories'){
			AppActions.addItem(this.props.item);
			item.setAttribute('class', 'item-inner saved');			
		} else {
			AppActions.removeItem(this.props.item);
			item.setAttribute('class', 'item-inner removed');
		}

	},
	
	parseUrl: function(url){
		var r = /:\/\/(.[^/]+)/;
		var parsedURL;
		if( url ) {
	    	return parsedURL = url.match(r)[1];      
	    }
	},

	componentWillMount: function() {
		React.initializeTouchEvents(true)
	},

	componentDidMount: function() {
	    var link = this.refs.itemLink.getDOMNode(),
	        item = this.refs.item.getDOMNode();

	    this.hammer = new Hammer.Manager(item, {dragLockToAxis: true, dragBlockHorizontal: true});
	    this.hammer.add( new Hammer.Pan({ threshold: 50 }) );

	    this.hammer.on('panleft', function(event){
	      	item.setAttribute("class", "item-inner expanded")
	    });

	    this.hammer.on('panright', function(event){
	      	item.setAttribute("class", "item-inner")
	    });
	},

  	compoentDidUnmount: function() {
    	this.hammer.off('panleft panright')
  	},

	render: function(){
		return (
			<li className={this.props.listType}>
				<div ref="item" className="item-inner" >
					<h3>{this.props.item.title}</h3>
					<p>{this.parseUrl(this.props.item.url)}</p>
					<a ref="itemLink" href={this.props.item.url} target="_blank" ></a> 

				</div>
				<a ref="saveDeleteButton" className="button" onClick={this.editFavourites}></a>
			</li>
		)
	}
})

module.exports = ListItem;