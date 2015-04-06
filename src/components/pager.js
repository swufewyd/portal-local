var React = require('react/addons');
var Reflux = require('reflux');
var Table = require('react-bootstrap').Table;
var Lodash = require('lodash');

var Pager = React.createClass({
    getInitialState : function(){
        return{
            page:1
        }
    },

    clickHandler: function(e){
        e.preventDefault();
        var currentPage = this.state.page;
        if(e.target.dataset.direction==="pre"){
        	if(currentPage == 1){
        		return false;
        	}
        	this.setState({page:currentPage-1});
        	this.props.loadUserRows(currentPage-1);
        }else{
        	if(currentPage == this.props.userCount){
        		return false;
        	}
        	this.setState({page:currentPage+1});
        	this.props.loadUserRows(currentPage+1);
        }
        
        
        e.target.dataset.direction==="pre"?(this.setState({page:this.state.page-1})):(this.setState({page:this.state.page+1}));
        

    },
    render : function(){
        var cx = React.addons.classSet;
        var preClass = cx({
            'previous':true,
            'disabled':this.state.page == 1
        });
        var nextClass = cx({
            'next':true,
            'disabled':this.state.page == this.props.userCount
        });

        return(
            <ul className="pager">
                <li className={preClass}  onClick={this.clickHandler}>
                    <a href="#" data-direction="pre" data-page={this.props.page-1}>&larr;Prev</a>
                </li>
                <li>
                    <span>{this.state.page}/{this.props.userCount}</span>
                </li>
                <li className={nextClass}  onClick={this.clickHandler}>
                    <a href="#" data-direction="next" data-page={this.props.page+1}>Next&rarr;</a>
                </li>
            </ul>
        )
    }
});

module.exports = Pager;