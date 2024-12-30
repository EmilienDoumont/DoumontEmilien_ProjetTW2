export class Transaction {
    constructor(
      public id: number,
      public buyerId: number,
      public productId: number,
      public quantity: number,
      public totalPrice: number,
      public date: string
    ) {}
  
    static fromJSON(json: any): Transaction {
      return new Transaction(
        json.id,
        json.buyer_id,
        json.product_id,
        json.quantity,
        json.total_price,
        json.date
      );
    }
  }
  