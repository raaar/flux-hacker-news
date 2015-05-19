/** @jsx React.DOM */
var React = require('react'),
	AppActions = require('../actions/app-actions.js');

var RemoveFromCart = React.createClass({

	handleClick: function(){
		AppActions.removeItem(this.props.index)
	},

	render:function(){
			return <button onClick={this.handleClick}>Remove from cart</button>
		}
	})


module.exports = RemoveFromCart;