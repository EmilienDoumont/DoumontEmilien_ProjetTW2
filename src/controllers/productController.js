import Product from '../models/product';

class ProductController {
  constructor() {
    this.products = [];
  }

  async loadProducts() {
    const response = await fetch('/data/data.json');
    const data = await response.json();
    this.products = data.products.map(product => Product.fromJSON(product));
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

export default ProductController;