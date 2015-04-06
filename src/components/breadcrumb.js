/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var classnames = require('classnames');

var Router = require('react-router');
var Link = Router.Link;

var AC = require('../common/adminCommons');

var Breadcrumb = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },

    createPaths: function () {
        var routes = this.context.router.getCurrentRoutes();
        var lastIdx = routes.length - 1;
        return routes.map(function (route, idx) {
            var name = AC.findMenuLabel(route.name) || route.name;
            var className;
            var link;
            if (idx === lastIdx) {
                className = classnames({'active': idx === lastIdx});
                link = name;
            } else {
                className = null;
                link = <Link to={route.name}>{name}</Link>
            }
            return (
                <li className={className} key={'bl'+idx}>
                    {link}
                </li>
            );
        })
    },

    render: function () {
        var paths = this.createPaths();
        return (
            <ul className="breadcrumb">
                {paths}
            </ul>
        );
    }
});

module.exports = Breadcrumb;
