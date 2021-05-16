"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const Order_1 = require("./Order");
const Product = db_1.default.define("product", {
    name: sequelize_1.DataTypes.STRING,
    imageUrl: sequelize_1.DataTypes.TEXT,
    description: sequelize_1.DataTypes.TEXT,
    price: sequelize_1.DataTypes.INTEGER,
    categoryId: sequelize_1.DataTypes.INTEGER,
    userId: sequelize_1.DataTypes.INTEGER,
});
Product.hasOne(Order_1.default, {
    foreignKey: {
        name: "productId",
    },
});
Order_1.default.belongsTo(Product, { as: "product" });
exports.default = Product;
