const Transaction = require('../src/models/transaction');

describe('Transaction', () => {
  test('should create a Transaction instance from JSON', () => {
    const json = {
      id: 1,
      buyer_id: 1,
      product_id: 1,
      quantity: 2,
      total_price: 2400,
      date: '2024-12-01T14:30:00Z'
    };
    const transaction = Transaction.fromJSON(json);

    expect(transaction).toBeInstanceOf(Transaction);
    expect(transaction.quantity).toBe(2);
    expect(transaction.totalPrice).toBe(2400);
  });
});