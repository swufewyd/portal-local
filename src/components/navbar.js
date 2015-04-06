/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var lodashMap = require('lodash/collection/map');

var Router = require('react-router');
var Link = Router.Link;

var OC = require('../common/openCommons');


var Navbar = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    getInitialState: function () {
        return {open: {}};
    },



    render: function () {
        var name = this.state.open.name || this.state.open.email || this.state.open.id;

        var navMenuGroups = lodashMap(OC.NAV_MENU_GROUPS, function (groupName, idx) {
            var group = OC.MENUS[groupName];
            var menu = group[0];
            var className = null;
            if (this.context.router.isActive(menu.name)) {
                className = "active";
            }
            return <li className={className} key={'mg'+idx}><Link to={menu.name}>{menu.label}</Link></li>
        }.bind(this));

        return (
            <div className="navbar navbar-inverse navbar-static-top navbar-normal">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">点击浏览</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="portal">誉存科技</Link>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            {navMenuGroups}
                        </ul>
                      
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Navbar;
