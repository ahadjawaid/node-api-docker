"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const connect_1 = __importDefault(require("./connect"));
const routes_1 = __importDefault(require("./routes"));
require('dotenv').config();
const port = process.env.PORT;
const mongoURI = 'mongodb://mongo:27017/test';
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
(0, connect_1.default)(mongoURI);
(0, routes_1.default)(app);
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
