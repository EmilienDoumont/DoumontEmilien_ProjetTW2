"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, role, email, password) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.email = email;
        this.password = password;
    }
    static fromJSON(json) {
        return new User(json.id, json.name, json.role, json.email, json.password);
    }
}
exports.User = User;
