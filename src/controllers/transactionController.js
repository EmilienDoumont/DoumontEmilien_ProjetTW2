import Transaction from '../models/transaction';
import UserController from './userController.js';
import ProductController from './productController.js';

class TransactionController {
  constructor() {
    this.transactions = [];
    this.userController = new UserController();
    this.productController = new ProductController();
  }

  async loadTransactions() {
    const response = await fetch('/data/data.json');
    const data = await response.json();
    this.transactions = data.transactions.map(transaction => Transaction.fromJSON(transaction));
  }

  getTransactions() {
    return this.transactions;
  }

  getTransactionDetails(transactionId) {
    const transaction = this.transactions.find(t => t.id === transactionId);
    if (!transaction) return null;

    const buyer = this.userController.getUserById(transaction.buyer_id);
    const product = this.productController.getProducts().find(p => p.id === transaction.product_id);

    return {
      transaction,
      buyer,
      product
    };
  }
}

export default TransactionController;