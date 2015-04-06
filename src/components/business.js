/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var portalStore = require('../stores/portalStore');
// var Breadcrumb = require('./breadcrumb');
var BusinessMenu = require('./businessMenu');

var Business = React.createClass({
    mixins: [Reflux.connectFilter(portalStore, "data2", function(data) {
        return data.data2;
    })],
    render: function () {
        return (

            <div className="container-fluid main">
                <div className="row">
                    <div className="col-xs-2">
                        <BusinessMenu />
                    </div>
                    <div className="col-xs-10">
                        {/*<Breadcrumb />*/}
                        <p>this is a breadcrumb~</p>
                        <RouteHandler data={this.state.data2} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Business;
