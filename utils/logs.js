/**
 * @author zore
 * @date 2018/12/1
 * @file logs
 * @Description: 全局log封装
*/
"use strict";

const log4js = require('log4js')
const logConfig = require("../config/logging")
const fs = require("fs")
const path = require("path")

log4js.configure(logConfig)

let dateFileLog = log4js.getLogger('logErr');
// const log = log4js.getLogger('logErr');
// log.trace('Entering cheese testing');
// log.debug('Got cheese.');
// log.info('Cheese is Comté.');
// log.warn('Cheese is quite smelly.');
// log.error('Cheese is too ripe!');
// log.fatal('Cheese was breeding ground for listeria.');

exports.use = function(app) {
	//页面请求日志, level用auto时,默认级别是WARN
	app.use(log4js.connectLogger(dateFileLog));
}