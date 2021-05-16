"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OrderController_1 = require("../controllers/OrderController");
class OrderRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get("/search", OrderController_1.default.search);
        this.router.get("/all", OrderController_1.default.getAll);
        this.router.get("/:id", OrderController_1.default.getOne);
    }
    postRoutes() {
        this.router.post("/create", OrderController_1.default.create);
    }
    patchRoutes() {
        this.router.patch("/update", OrderController_1.default.update);
    }
    deleteRoutes() {
        this.router.delete("/delete", OrderController_1.default.delete);
    }
}
exports.default = new OrderRouter().router;
