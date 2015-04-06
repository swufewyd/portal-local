/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var portalActions = require('../actions/portalActions');
var portalStore = require('../stores/portalStore');
var UserRegForm = require('./userRegForm');
var UserReg = React.createClass({
	
	getInitialState: function() {
		return {
		};
	},
	testClick: function() {
		// console.log(this.props.data);
		portalActions.test('haha');
	},
	render: function() {
	
		return ( < div >
				<br />
				<br />
				<div className="row">
				       <div className="col-xs-8">
				           <UserRegForm  />
				       </div>
				</div>

				
				
			< /div>
		);
	}
});

module.exports = UserReg;