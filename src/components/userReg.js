/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var portalActions = require('../actions/portalActions');
var portalStore = require('../stores/portalStore');
var Griddle = require('griddle-react');
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
	var fakeData =  [
	{
	  "January": 35,
	  "February": 25,
	  "March": 27,
	  "April": 32,
	  "May": 23,
	  "June": 42
	},{
	  "January": 36,
	  "February": 20,
	  "March": 27,
	  "April": 32,
	  "May": 23,
	  "June": 42
	},{
	  "January": 37,
	  "February": 20,
	  "March": 27,
	  "April": 32,
	  "May": 23,
	  "June": 42
	},{
	  "January": 38,
	  "February": 28,
	  "March": 27,
	  "April": 32,
	  "May": 23,
	  "June": 42
	}
	]; 
		return ( < div >
				<br />
				<br />
				<div className="row">
				       <div className="col-xs-8">
				           <UserRegForm  />
				       </div>
				</div>

				<div className="row">
				       <div className="col-xs-8">
				           <Griddle results={fakeData} />
				       </div>
				</div>
				
			< /div>
		);
	}
});

module.exports = UserReg;