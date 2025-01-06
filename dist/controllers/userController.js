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
const user_1 = __importDefault(require("../models/user"));
class UserController {
    constructor() {
        this.users = [];
    }
    loadUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('/data/data.json');
            const data = yield response.json();
            this.users = data.users.map(user => user_1.default.fromJSON(user));
        });
    }
    getUsers() {
        return this.users;
    }
    getUserById(userId) {
        return this.users.find(user => user.id === userId);
    }
}
exports.default = UserController;
