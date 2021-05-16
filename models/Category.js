"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const Order_1 = require("./Order");
const Product_1 = require("./Product");
const Category = db_1.default.define("category", {
    name: sequelize_1.DataTypes.STRING,
    imageUrl: sequelize_1.DataTypes.TEXT,
    description: sequelize_1.DataTypes.TEXT,
});
Category.hasMany(Product_1.default, {
    foreignKey: {
        name: "categoryId",
    },
});
Category.hasOne(Order_1.default, {
    foreignKey: {
        name: "categoryId",
    },
});
Product_1.default.belongsTo(Category, { as: "category" });
Order_1.default.belongsTo(Category, { as: "category" });
exports.default = Category;
