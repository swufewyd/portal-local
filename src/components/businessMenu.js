/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var lodashMap = require('lodash/collection/map');

var Router = require('react-router');
var Link = Router.Link;

var OC = require('../common/openCommons');

var BusinessMenu = React.createClass({
    getDefaultProps: function () {
        return {
            menus: OC.MENUS.business.slice(1)
        };
    },

    createLinks: function () {
        return lodashMap(this.props.menus, function (item, idx) {
            return <Link className="list-group-item" to={item.name} key={'am'+idx}>{item.label}</Link>
        });
    },

    render: function () {
        var links = this.createLinks();
        return (
            <div className="list-group">
                {links}
            </div>
        );
    }
});

module.exports = BusinessMenu;
