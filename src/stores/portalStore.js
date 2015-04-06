'use strict';
var Reflux = require('reflux');
var lodashAssign = require('lodash/object/assign');
var lodashFilter = require('lodash/collection/filter');
var portalActions = require('../actions/portalActions');

var portalStore = Reflux.createStore({
    listenables: [portalActions],
    getInitialState: function() {
        this.userObjs = [
                                    {
                                        'name':'小明',
                                        'email':'xiaoming@163.com',
                                        'score':'99',
                                        'lastLogin':'2015/3/31'
                                    },
                                    {
                                        'name':'小王',
                                        'email':'xiaowang@163.com',
                                        'score':'299',
                                        'lastLogin':'2015/3/31'
                                    },
                                    {
                                        'name':'小李',
                                        'email':'xiaowang@163.com',
                                        'score':'299',
                                        'lastLogin':'2015/3/31'
                                    },
                                    {
                                        'name':'小张',
                                        'email':'xiaowang@163.com',
                                        'score':'299',
                                        'lastLogin':'2015/3/31'
                                    },
                                    {
                                        'name':'小五',
                                        'email':'xiaowang@163.com',
                                        'score':'299',
                                        'lastLogin':'2015/3/31'
                                    },
                                    {
                                        'name':'小样',
                                        'email':'xiaowang@163.com',
                                        'score':'299',
                                        'lastLogin':'2015/3/31'
                                    },
                                    {
                                        'name':'小罗',
                                        'email':'xiaowang@163.com',
                                        'score':'299',
                                        'lastLogin':'2015/3/31'
                                    },
                                    {
                                        'name':'小Q',
                                        'email':'xiaowang@163.com',
                                        'score':'299',
                                        'lastLogin':'2015/3/31'
                                    },
                                    {
                                        'name':'小R',
                                        'email':'xiaowang@163.com',
                                        'score':'299',
                                        'lastLogin':'2015/3/31'
                                    },
                                    {
                                        'name':'小X',
                                        'email':'xiaowang@163.com',
                                        'score':'299',
                                        'lastLogin':'2015/3/31'
                                    },
                                    {
                                        'name':'小Z',
                                        'email':'xiaowang@163.com',
                                        'score':'299',
                                        'lastLogin':'2015/3/31'
                                    },
                                    {
                                        'name':'小G',
                                        'email':'xiaowang@163.com',
                                        'score':'299',
                                        'lastLogin':'2015/3/31'
                                    }
                                ];
        this.data = {     
                                'users':{'userObjs':this.userObjs.slice(0,5),'userCount':Math.ceil(this.userObjs.length/5)},
                                'data2':{
                                    'name':'businessInfo'
                                }
        };
        return  this.data;
    },
    onLoadUserRows: function(params) {
        // console.log(params);
        var newUserObjs = this.userObjs.slice((params-1)*5,params*5);
        // lodashAssign(this.data,{'userObjs':newUserObjs});
        this.data.users.userObjs = newUserObjs;
     
        this._update();
    },
    onFilterUserRows: function (params) {
        this.data.users.userObjs = lodashFilter(this.userObjs, function(obj) {
            return (obj.name.indexOf(params)>=0?true:false)
        });
        this.data.users.userCount = Math.ceil(this.data.users.userObjs.length/5);
        this._update();
    },
    onLocalUpdate: function (data) {
        lodashAssign(this.data, {open: data});
        this._update()
    },
    onLocalUpdateopens: function (data) {
        lodashAssign(this.data, {opens: data.opens});
        this._update();
    },
    /*onTest: function (data){
        console.log(data,'store');
        this._update();
    },*/
    onFoo: function (data){
        // console.log(data,'store');
        this.data = {
                                'users':[
                                    {
                                        'name':'小明',
                                        'email':'xiaoming@163.com',
                                        'score':'99',
                                        'lastLogin':'2015/3/31'
                                    },
                                    {
                                        'name':'小王',
                                        'email':'xiaowang@163.com',
                                        'score':'299',
                                        'lastLogin':'2015/3/31'
                                    }
                                ],
                                'data2':{
                                    'name':'businessInfo'
                                }
        };
        this._update();
    },
    _update: function () {
        this.trigger(this.data);
    }
});

module.exports = portalStore;
