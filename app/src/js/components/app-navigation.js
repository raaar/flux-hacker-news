/** @jsx React.DOM */
var React = require('react'),
	AppStore = require('../stores/app-store.js');


var Navigation = React.createClass({
	render: function(){
		return (
			<nav>
			      <ul>
			        <li>
			        	<a 	href="#" className={'topstories'}>
			        		<i className=" icon-list-bullet"></i>
			        	</a>
			        </li>

			        <li>
			        	<a 	href="#" className={'favourites'}>
			        		<i className="icon-heart"></i>
			        	</a>
			        </li>
			      </ul>

			</nav>
		)
	}
})


module.exports = Navigation;