'use strict';
var Reflux = require('reflux');
var HttpRequest = require('superagent');
var lodashIsFunction = require('lodash/lang/isFunction');

var HttpIntercept = require('../common/httpIntercept');
var OC = require('../common/openCommons');

var portalActions = Reflux.createActions({
    login: {},
    findOne: {},
    findAdminById: {},
    findAdmins: {},
    localUpdate: {},
    localUpdateAdmins: {},
    test:{},
    foo:{},
    loadUserRows:{},
    filterUserRows:{}
});


var defaultCallback = function (err, resp, callback_) {
    HttpIntercept.authIntercept(resp);
    var data = null;
    if (resp.ok) {
        data = JSON.parse(resp.text);
    }
    if (lodashIsFunction(callback_)) {
        callback_(resp, data);
    }
};

portalActions.test.listen(function (body, callback_) {
    
    HttpRequest.get('/api/client/user/search')
        .end(function(res){
            console.log(res);
            portalActions.foo('error from wyd');
        });
   
});


/**
 * @param body: JSON = authId, password
 * @param callback_: Option[Function]
 */
portalActions.login.listen(function (body, callback_) {
    HttpRequest.post('/api/admin/login')
        .send(body)
        .end(function (err, resp) {
            defaultCallback(err, resp, callback_);
        });
});

/**
 * @param query 查询参数
 * @param [callback_] (resp, data)
 */
portalActions.findAdmins.listen(function (query, callback_) {
    HttpRequest.get('/api/admin/list')
        .query(query)
        .end(function (err, resp) {
            defaultCallback(err, resp, callback_);
        });
});

/**
 * @param [callback_] (resp, data)
 */
portalActions.findOne.listen(function (callback_) {
    HttpRequest.get('/api/admin/' + AC.getSessionAdminId())
        .end(function (err, resp) {
            defaultCallback(err, resp, callback_);
        });
});

/**
 * @param [callback_] (resp, data)
 */
portalActions.findAdminById.listen(function (id, callback_) {
    HttpRequest.get('/api/admin/' + id)
        .end(function (err, resp) {
            defaultCallback(err, resp, callback_);
        });
});

module.exports = portalActions;
