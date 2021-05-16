"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express = require("express");
const CategoryRouter_1 = require("./routers/CategoryRouter");
const OrderRouter_1 = require("./routers/OrderRouter");
const ProductRouter_1 = require("./routers/ProductRouter");
const UserRouter_1 = require("./routers/UserRouter");
class Server {
    constructor() {
        this.app = express();
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        this.app.use(express.json());
        this.setRoutes();
        this.error404Handler();
        this.handleErrors();
    }
    setRoutes() {
        this.app.get("/", (req, res, next) => { res.send("Welcome To SelLnBuY NodeJs API v1.0"); });
        this.app.use("/api/v1/category", CategoryRouter_1.default);
        this.app.use("/api/v1/product", ProductRouter_1.default);
        this.app.use("/api/v1/user", UserRouter_1.default);
        this.app.use("/api/v1/order", OrderRouter_1.default);
    }
    error404Handler() {
        this.app.use((req, res) => {
            res.status(404).json({
                message: "Not Found",
                status_code: 404,
            });
        });
    }
    handleErrors() {
        this.app.use((error, req, res, next) => {
            const errorStatus = req.errorStatus || 500;
            res.status(errorStatus).json({
                message: error.message || "Something Went Wrong. Please Try Again.",
                status_code: errorStatus,
            });
        });
    }
}
exports.Server = Server;
