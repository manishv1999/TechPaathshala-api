const MysqlManager = require('shared/manager/mysql.manager.js')
const config = require("config");

mysqlManager = MysqlManager(config.mysql);

module.exports = mysqlManager;