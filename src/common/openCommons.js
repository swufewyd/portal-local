'use strict';
var lodashFind = require('lodash/collection/find');


var OC = {


    USER_DEFAULT_AVATAR: '/assets/img/avatar-default.png',

    NAV_MENU_GROUPS: ['user','business'],

    MENUS: {
        user: [
            {label: "用户", href: "/open/user", name: "user"},
            {label: "用户注册", href: "/open/user/reg", name: "userReg"},
            {label: "用户管理", href: "/open/user/manage", name: "userManage"}
        ],
        business: [
            {label: "商户", href: "/open/business", name: "business"},
            {label: "基本信息", href: "/open/business/info", name: "businessInfo"},
            {label: "APIKEY", href: "/open/business/apikey", name: "businessApikey"},  
            {label: "平台信息", href: "/open/business/platformInfo", name: "businessPlatformInfo"}  
        ]
        // client: [
        //     {label: "客户", href: "/admin/client", name: "client"},
        //     {label: "客户管理", href: "/admin/client/main", name: "clientMain"}
        // ],

        // account: [
        //     {label: "账号", href: "/admin/account", name: "account"},
        //     {label: "账号管理", href: "/admin/account/edit", name: "accountEdit"}
        // ],

        // setting: [
        //     {label: "设置", href: "/admin/setting", name: "setting"},
        //     {label: "系统设置", href: "/admin/setting/edit", name: "settingEdit"},
        //     {label: "日志配置", href: "/admin/setting/log", name: "settingLog"}
        // ]
    },

    MAIN_MENU: {label: '管理控制台', href: '/admin/main', name: 'main'},

   
    }

module.exports = OC;
