/**
 * @author zore
 * @date 2018/12/1
 * @file .evn
 * @Description:
*/
"use strict";

let Config = {
    //版本号
    version: '0.0.1',
    apiVersion: 'v1',
    url: {
        // 如果指定，则优先使用 ； 如果不指定： 在 模拟器 用本地环境，在 真机中 用 线上 idc 环境
        // 如果制定了，但 不存在对应 api url， 相当于没指定
        currentEnv: 'idc', // Tool.env( 'apiEnv', 'idc' ),
        api: {
            local: 'http://local.demo.com/api/', // 模拟器环境
            dev: 'http://local.demo.com/api/', // 开发环境
            pre: 'http://api.demo.com/api/', // 预发环境
            idc: 'https://api.demo.com/api/' // 线上环境
        },
        //工具和环境对应关系
        envLists: {
            devtools: 'local'
        }
    },
    web: {
        appName: ''
    },
    server: {
        port: 1314
    },
    mysql: {
        driver: '',
        host: '127.0.0.1',
        port: '3306',
        database: '',
        username: 'zore',
        password: 'a12345678',
        unix_socket: '',
        charset: '',
        collation: '',
        prefix: '',
        strict: true,
        engine: null
    },
    mongodb: {},
    redis: {}
};


if (typeof module !== 'undefined') {
    module.exports = Config;
    module.export = Config;
} else {
    window.Config = Config;
}
