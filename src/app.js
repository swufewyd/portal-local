/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');

// var AC = require('./common/adminCommons');
// var adminActions = require('./actions/adminActions');

var routes = require('./components/app');

// if (sessionStorage) {
//     adminActions.findOne(function (resp, admin) {
//         if (resp.ok) {
//             AC.setSessionAdminId(admin.id);
//             adminActions.localUpdate(admin)
//         }
//     });
// } else {
//     alert('您的浏览器版本太低，升级后拥有更佳体验！推荐使用：Chrome、Firefox。');
// }

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});


