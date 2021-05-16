"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
class UserController {
    static getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield User_1.default.findAll({
                    attributes: [
                        "id",
                        "userId",
                        "name",
                        "provider",
                        "email",
                        "mobile",
                        "createdAt",
                        "updatedAt",
                    ],
                });
                if (response) {
                    res.send(response);
                }
                else {
                    next({ message: "Record Not Found" });
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const response = yield User_1.default.findByPk(id, {
                    attributes: [
                        "id",
                        "userId",
                        "name",
                        "provider",
                        "email",
                        "mobile",
                        "createdAt",
                        "updatedAt",
                    ],
                });
                if (response) {
                    res.send(response);
                }
                else {
                    next({ message: "Record Not Found" });
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    static search(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cols = ["id", "name", "categoryId"];
                const where = {};
                cols.forEach((element) => {
                    if (req.query[element]) {
                        where[element] = req.query[element];
                    }
                });
                const response = yield User_1.default.findAll({
                    where: where,
                    attributes: [
                        "id",
                        "userId",
                        "name",
                        "provider",
                        "email",
                        "mobile",
                        "createdAt",
                        "updatedAt",
                    ],
                });
                if (response.length !== 0) {
                    res.send(response);
                }
                else {
                    next({ message: "Record Not Found" });
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cols = ["userId", "name", "provider", "email", "mobile"];
                let data = {};
                cols.forEach((element) => {
                    if (req.body[element]) {
                        data[element] = req.body[element];
                    }
                });
                if (Object.keys(data).length !== 0) {
                    yield User_1.default.create(data);
                    res.send({ message: "Record Created Successfully" });
                }
                else {
                    next({ message: "Error" });
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.query.id;
                const oldRecord = yield User_1.default.findOne({ where: { id: id } });
                let cols = ["userId", "name", "provider", "email", "mobile"];
                let data = {};
                cols.forEach((element) => {
                    if (req.body[element]) {
                        data[element] = req.body[element];
                    }
                    else {
                        data[element] = oldRecord[element];
                    }
                });
                if (Object.keys(data).length == cols.length) {
                    yield User_1.default.update(data, { where: { id: id } });
                    res.send({ message: "Record Updated Successfully" });
                }
                else {
                    next({ message: "Error" });
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    static delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.query.id;
                const oldRecord = yield User_1.default.findOne({ where: { id: id } });
                if (oldRecord) {
                    yield User_1.default.destroy({ where: { id: id } });
                    res.send({ message: "Record Deleted Successfully" });
                }
                else {
                    next({ message: "Record Not Found" });
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = UserController;
