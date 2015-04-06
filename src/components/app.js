/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Redirect = Router.Redirect;

// var AC = require('../common/adminCommons');

var portalStore = require('../stores/portalStore');

var Navbar = require('./navbar');
// var Footer = require('./footer');
var Main = require('./main');
var User = require('./user');
var UserReg = require('./userReg');
var UserManage = require('./userManage');


var Business = require('./business');
var BusinessInfo = require('./businessInfo');
var BusinessApikey = require('./businessApikey');
var BusinessPlatformInfo = require('./businessPlatformInfo');

var APP = React.createClass({
    mixins: [Reflux.connect(portalStore,"data")],
    render: function () {
        // console.log(this.state.data);
        return (
            <div>
                <Navbar />
                <RouteHandler data={this.state.data}/>
                
            </div>
        );
    }
});

var routes = (
    <Route name="index" path="/" handler={APP}>
              <DefaultRoute name="main" handler={Main}/>
                <Route name="user" path="user" handler={User}>
                        <Route name="userReg" path="reg" handler={UserReg}/>
                        <Route name="userManage" path="manage" handler={UserManage}/>
                </Route>      
                <Route name="business" path="business" handler={Business}>
                       <Route name="businessInfo" path="info" handler={BusinessInfo}/>                 
                       <Route name="businessApikey" path="apikey" handler={BusinessApikey}/>                 
                       <Route name="businessPlatformInfo" path="platformInfo" handler={BusinessPlatformInfo}/>                 
                 </Route>
        </Route>



        /*<Route name="client" path="client" handler={Client}>
            <Route name="clientMain" path="main" handler={ClientMain}/>
            <Redirect from="/admin/client" to="clientMain"/>
            <Redirect to="clientMain"/>
        </Route>
        <Route name="setting" path="setting" handler={Setting}>
            <Route name="settingEdit" path="edit" handler={SettingEdit}/>
            <Route name="settingLog" path="log" handler={SettingLog}/>
            <Redirect from="/admin/setting" to="settingEdit" />
            <Redirect to="settingEdit"/>
        </Route>
        <Route name="account" path="account" handler={Account}>
            <Route name="accountEdit" path="edit" handler={AccountEdit}/>
            <Redirect from="/admin/account" to="accountEdit"/>
            <Redirect to="accountEdit"/>
        </Route>*/
  
);

module.exports = routes;
