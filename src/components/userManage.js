/** @jsx React.DOM */
var React = require('react/addons');
var Reflux = require('reflux');
var Lodash = require('lodash');
var portalActions = require('../actions/portalActions');
var UserTable = require('./userTable');
var Pager = require('./pager');
var FilterBar = require('./filterBar');

var UserManage = React.createClass({
    loadUserRows:function(params) {
        // console.log(params);
        portalActions.loadUserRows(params);
    },
    onFilter : function (key) {
        portalActions.filterUserRows(key);
    },
    render: function () {
        this.userObjs = this.props.userObjs;
        return (     
                         <div>
                             <div className="row">
                                    <h1>UserManage</h1>
                                    <div className="col-xs-2">
                                        <FilterBar onFilter={this.onFilter} />
                                    </div>
                             </div>
                             <br />
                             <div className="row">
                                      <div className="col-xs-10">
                                             <UserTable userObjs={this.userObjs} />
                		       <Pager loadUserRows={this.loadUserRows} userCount={this.props.userCount}/>
                                      </div>
                              </div>
        		</div>
        		);
    }
});

module.exports = UserManage;
