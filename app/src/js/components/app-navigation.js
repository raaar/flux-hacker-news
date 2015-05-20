/** @jsx React.DOM */
var React = require('react'),
	AppStore = require('../stores/app-store.js');

var Router = require('react-router');
var Link = Router.Link;








var Navigation = React.createClass({
	mixins: [ Router.State ],


	render: function(){

		return (
			<nav>
			      <ul>
			        <li>
			        	<Link to="home">
			        		<i className=" icon-list-bullet"></i>
			        	</Link>
			        </li>

			        <li>
			        	<Link to="saved">
			        		<i className="icon-heart"></i>
			        	</Link>
			        </li>
			      </ul>

			</nav>
		)
	}
})


module.exports = Navigation;