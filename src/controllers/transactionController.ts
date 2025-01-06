import {Transaction} from '../models/transaction';
import UserController from './userController';
import ProductController from './productController';

interface TransactionDetail {
  transaction: Transaction;
  buyer: any; 
  product: any;  
}

class TransactionController {
  transactions: Transaction[] = [];
  userController: UserController;
  productController: ProductController;

  constructor() {
    this.userController = new UserController();
    this.productController = new ProductController();
  }

  async loadTransactions(): Promise<void> {
    const response = await fetch('/data/data.json');
    const data = await response.json();
    this.transactions = data.transactions.map((transaction: any) => Transaction.fromJSON(transaction));
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  getTransactionDetails(transactionId: number): TransactionDetail | null {
    const transaction = this.transactions.find((t) => t.id === transactionId);
    if (!transaction) return null;

    const buyer = this.userController.getUserById(transaction.buyerId);
    const product = this.productController.getProducts().find((p) => p.id === transaction.productId);

    return {
      transaction,
      buyer,
      product
    };
  }
}

export default TransactionController;
