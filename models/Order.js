"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const Order = db_1.default.define("order", {
    orderId: sequelize_1.DataTypes.STRING,
    categoryId: sequelize_1.DataTypes.INTEGER,
    productId: sequelize_1.DataTypes.INTEGER,
    userId: sequelize_1.DataTypes.INTEGER,
    totalPrice: sequelize_1.DataTypes.INTEGER,
});
exports.default = Order;
