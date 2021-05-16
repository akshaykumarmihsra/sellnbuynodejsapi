"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get("/search", UserController_1.default.search);
        this.router.get("/all", UserController_1.default.getAll);
        this.router.get("/:id", UserController_1.default.getOne);
    }
    postRoutes() {
        this.router.post("/create", UserController_1.default.create);
    }
    patchRoutes() {
        this.router.patch("/update", UserController_1.default.update);
    }
    deleteRoutes() {
        this.router.delete("/delete", UserController_1.default.delete);
    }
}
exports.default = new UserRouter().router;
