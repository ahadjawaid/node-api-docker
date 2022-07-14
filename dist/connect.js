"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = (mongoURI) => {
    const connect = () => {
        if (mongoURI) {
            mongoose_1.default.connect(mongoURI)
                .then(() => console.info(`Successfully connected to ${mongoURI}`))
                .catch((err) => {
                console.error(`Error connecting to database : ${err}`);
                return process.exit(1);
            });
        }
        else {
            console.log("URI is undefined");
        }
    };
    connect();
    // Reconnect if mongoose disconnects
    mongoose_1.default.connection.on('disconnected', connect);
};
