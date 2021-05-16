"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const Order_1 = require("./Order");
const Product_1 = require("./Product");
const User = db_1.default.define("user", {
    userId: sequelize_1.DataTypes.INTEGER,
    name: sequelize_1.DataTypes.STRING,
    provider: sequelize_1.DataTypes.STRING,
    email: sequelize_1.DataTypes.STRING,
    mobile: sequelize_1.DataTypes.STRING,
});
User.hasOne(Order_1.default, {
    foreignKey: {
        name: "userId",
    },
});
User.hasOne(Product_1.default, {
    foreignKey: {
        name: "userId",
    },
});
Order_1.default.belongsTo(User, { as: "user" });
Product_1.default.belongsTo(User, { as: "user" });
exports.default = User;
