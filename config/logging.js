/**
 * @author zore
 * @date 2018/12/1
 * @file logging
 * @Description: log 配置文件
*/
"use strict";

const path = require('path');
let logPath = path.join(__dirname, '../log')
module.exports = {
	replaceConsole: true,
	appenders: {
		console: {
			type: "console", category: "console"
		},
		http: {
			type: "dateFile", // 可以设置成 console、file、dateFile三种
			filename: `${logPath}/url/`, // // 设置log输出的文件路劲和文件名
			pattern: ".yyyy-MM-dd.txt",
			maxLogSize: '10000000', // 设置文件大小
			encoding: "utf-8", // 设置文件编码格式
			alwaysIncludePattern: true // // 和上面同时使用 设置每天生成log名
		},
		logInfo: {
			type: "dateFile",
			filename: `${logPath}/info/`,
			pattern: ".yyyy-MM-dd.txt",
			alwaysIncludePattern: true
		},
		logDebug: {
			type: "dateFile",
			filename: `${logPath}/debug/`,
			pattern: ".yyyy-MM-dd.txt",
			alwaysIncludePattern: true
		},
		logWarn: {
			type: "dateFile",
			filename: `${logPath}/warn/`,
			pattern: ".yyyy-MM-dd.txt",
			alwaysIncludePattern: true
		},
		logErr: {
			type: "dateFile",
			filename: `${logPath}/error/`,
			pattern: ".yyyy-MM-dd.txt",
			alwaysIncludePattern: true
		}
	},
	categories: {
		default: {
			appenders: ['logDebug'],
			level: 'debug'
		},
		info: {
			appenders: ['logInfo'],
			level: 'info'
		},
		debug: {
			appenders: ['logDebug'],
			level: 'debug'
		},
		warn: {
			appenders: ['logWarn'],
			level: 'WARN'
		},
		error: {
			appenders: ['logErr'],
			level: 'error'
		},
		httpurl: {
			appenders: ['http'],
			format: ':method :url',
			level: 'error'
		}
	}
};