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
const product_1 = __importDefault(require("../models/product"));
class ProductController {
    constructor() {
        this.products = [];
    }
    loadProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('/data/data.json');
            const data = yield response.json();
            this.products = data.products.map(product => product_1.default.fromJSON(product));
        });
    }
    getProducts() {
        return this.products;
    }
    updateStock(productId, newStock) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            product.stock = newStock;
            return true;
        }
        return false;
    }
}
exports.default = ProductController;
