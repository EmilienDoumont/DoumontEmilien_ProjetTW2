const Product = require('../src/models/product');

describe('Product', () => {
  test('should create a Product instance from JSON', () => {
    const json = {
      id: 1,
      domaine: 'Château Margaux',
      cuvee: 'Grand Vin',
      millesime: 2015,
      type: 'rouge',
      vignoble: 'Bordeaux',
      appellation: 'Margaux AOC',
      classification: 'Premier Cru Classé',
      price: 1200,
      stock: 10
    };
    const product = Product.fromJSON(json);

    expect(product).toBeInstanceOf(Product);
    expect(product.id).toBe(1);
    expect(product.domaine).toBe('Château Margaux');
    expect(product.price).toBe(1200);
  });
})