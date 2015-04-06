/** @jsx React.DOM */
'use strict';
var React = require('react');



var Main = React.createClass({
    render: function () {
        return (
            <div className="container-fluid main">
                <div className="row">
                    {/*{this.createPanels()}*/}
                    <h1>welcome to the 2B platform~</h1>
                </div>
            </div>
        );
    }
});

module.exports = Main;
