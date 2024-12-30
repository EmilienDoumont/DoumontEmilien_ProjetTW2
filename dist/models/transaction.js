"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    constructor(id, buyerId, productId, quantity, totalPrice, date) {
        this.id = id;
        this.buyerId = buyerId;
        this.productId = productId;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
        this.date = date;
    }
    static fromJSON(json) {
        return new Transaction(json.id, json.buyer_id, json.product_id, json.quantity, json.total_price, json.date);
    }
}
exports.Transaction = Transaction;
