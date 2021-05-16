"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const MYSQL_USERNAME = "sellnbuy_root@sellnbuy";
const MYSQL_PASSWORD = "Apple@123";
const MYSQL_HOST = "sellnbuy.mysql.database.azure.com";
const MYSQL_DB_NAME = "sellnbuy";
const sequelize = new sequelize_1.Sequelize(MYSQL_DB_NAME, MYSQL_USERNAME, MYSQL_PASSWORD, {
    host: MYSQL_HOST,
    dialect: "mysql",
});
exports.default = sequelize;
