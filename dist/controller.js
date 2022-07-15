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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUser = exports.UpdateUser = exports.GetUser = exports.CreateUser = void 0;
const models_1 = __importDefault(require("./models"));
const CreateUser = ({ email, firstName, lastName }) => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.default.create({
        email,
        firstName,
        lastName
    }).then((data) => data)
        .catch((error) => {
        throw error;
    });
});
exports.CreateUser = CreateUser;
const GetUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.default.findById(id).exec();
    return user;
});
exports.GetUser = GetUser;
const UpdateUser = (id, update) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.default.findByIdAndUpdate(id, Object.assign({}, update)).exec();
    return user;
});
exports.UpdateUser = UpdateUser;
const DeleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield models_1.default.findByIdAndDelete(id).exec();
});
exports.DeleteUser = DeleteUser;
