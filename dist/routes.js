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
const controller_1 = require("./controller");
exports.default = (app) => {
    app.get("/", (req, res) => {
        res.status(200).send("Welcome to the homepage!");
    });
    app.get('/404', (req, res) => {
        res.status(404).send({ "msg": "Route not found" });
    });
    app.get("/api/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userData = yield (0, controller_1.GetUser)(req.body.id);
        res.status(200).send(userData);
    }));
    app.get("/*", (req, res) => {
        res.redirect('/404');
    });
    app.post("/api/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield (0, controller_1.CreateUser)({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        });
        res.status(201).send({ user });
    }));
    app.patch("/api/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.body.id;
        const update = {};
        if (req.body.email) {
            update.email = req.body.email;
        }
        if (req.body.firstName) {
            update.firstName = req.body.firstName;
        }
        if (req.body.lastName) {
            update.lastName = req.body.lastName;
        }
        const user = yield (0, controller_1.UpdateUser)(id, update);
        res.status(200).send(user);
    }));
    app.delete("/api/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, controller_1.DeleteUser)(req.body.id);
        res.status(204);
    }));
};
