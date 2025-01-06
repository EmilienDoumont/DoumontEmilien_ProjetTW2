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
const transaction_1 = require("../models/transaction");
const userController_1 = __importDefault(require("./userController"));
const productController_1 = __importDefault(require("./productController"));
class TransactionController {
    constructor() {
        this.transactions = [];
        this.userController = new userController_1.default();
        this.productController = new productController_1.default();
    }
    loadTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('/data/data.json');
            const data = yield response.json();
            this.transactions = data.transactions.map((transaction) => transaction_1.Transaction.fromJSON(transaction));
        });
    }
    getTransactions() {
        return this.transactions;
    }
    getTransactionDetails(transactionId) {
        const transaction = this.transactions.find(t => t.id === transactionId);
        if (!transaction)
            return null;
        const buyer = this.userController.getUsers().find((user) => user.id === transaction.buyerId);
        const product = this.productController.getProducts().find((p) => p.id === transaction.productId);
        return {
            transaction,
            buyer,
            product
        };
    }
}
exports.default = TransactionController;
