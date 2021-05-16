"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = require("../controllers/ProductController");
class ProductRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get("/search", ProductController_1.default.search);
        this.router.get("/all", ProductController_1.default.getAll);
        this.router.get("/:id", ProductController_1.default.getOne);
    }
    postRoutes() {
        this.router.post("/create", ProductController_1.default.create);
    }
    patchRoutes() {
        this.router.patch("/update", ProductController_1.default.update);
    }
    deleteRoutes() {
        this.router.delete("/delete", ProductController_1.default.delete);
    }
}
exports.default = new ProductRouter().router;
