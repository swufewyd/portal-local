var React = require('react/addons');
var Reflux = require('reflux');
// var Input = require('../lib/index').Control.Input;

var FilterBar = React.createClass({
	handleFilter : function () {
		var input = this.refs.filterBar;
		this.props.onFilter(input.getDOMNode().value.trim());
	},
	handleChange : function(e) {
		if(e.keyCode === 13){
			this.handleFilter();
		}
	},
	render : function (){
	/*var cx = React.addons.classSet;
	var focusClass = cx({
	    'autofocus':true
	});*/
	return (
		<div>

		<div className="input-group">
		      <input ref="filterBar" type="text" className="form-control" onKeyUp={this.handleChange} placeholder="Search for..." />
		      <span className="input-group-btn">
		        <a className="btn btn-default" type="button" onClick={this.handleFilter}><i className="icon-search"></i></a>
		      </span>
		    </div>

		</div>
		)
	}
});

module.exports = FilterBar;