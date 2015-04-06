/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var portalStore = require('../stores/portalStore');
// var Breadcrumb = require('./breadcrumb');
var UserMenu = require('./userMenu');

var User = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    mixins: [Reflux.connectFilter(portalStore, "users", function(data) {
        return data.users;
    })],
    test:function(){
        var routes = this.context.router.getCurrentRoutes();
        console.log(routes);
    },
    render: function () {
        // console.log(this.state.users.userObjs);
         this.test();
         
        return (
            <div className="container-fluid main">
                <div className="row">
                    <div className="col-xs-2">
                        <UserMenu />
                    </div>
                    <div className="col-xs-10">
                        {/*<Breadcrumb />*/}
                        
                        <p>this is a breadcrumb~</p>
                        <RouteHandler userObjs={this.state.users.userObjs} userCount={this.state.users.userCount}/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = User;
