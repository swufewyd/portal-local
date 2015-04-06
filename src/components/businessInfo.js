/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');

var BusinessInfo = React.createClass({
    render: function () {
        return (<div><h1>BusinessInfo</h1>
        	store:{this.props.data}
        	</div>);
    }
});

module.exports = BusinessInfo;
