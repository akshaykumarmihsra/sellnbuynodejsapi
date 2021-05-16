"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CategoryController_1 = require("../controllers/CategoryController");
class CategoryRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get("/search", CategoryController_1.default.search);
        this.router.get("/all", CategoryController_1.default.getAll);
        this.router.get("/:id", CategoryController_1.default.getOne);
    }
    postRoutes() {
        this.router.post("/create", CategoryController_1.default.create);
    }
    patchRoutes() {
        this.router.patch("/update", CategoryController_1.default.update);
    }
    deleteRoutes() {
        this.router.delete("/delete", CategoryController_1.default.delete);
    }
}
exports.default = new CategoryRouter().router;
