export class Product {
    constructor(
      public id: number,
      public domaine: string,
      public cuvee: string,
      public millesime: number,
      public type: string,
      public vignoble: string,
      public appellation: string,
      public classification: string,
      public price: number,
      public stock: number
    ) {}
  
    static fromJSON(json: any): Product {
      return new Product(
        json.id,
        json.domaine,
        json.cuvee,
        json.millesime,
        json.type,
        json.vignoble,
        json.appellation,
        json.classification,
        json.price,
        json.stock
      );
    }
  }
  