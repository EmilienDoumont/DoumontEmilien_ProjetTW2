import { Product } from '../models/product';

class ProductController {
  private products: Product[] = [];

  async loadProducts(): Promise<void> {
    const response = await fetch('/data/data.json');
    const data = await response.json();
    this.products = data.products.map((product: any) => Product.fromJSON(product));
  }

  getProducts(): Product[] {
    return this.products;
  }

  updateStock(productId: number, newStock: number): boolean {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.stock = newStock;
      return true;
    }
    return false;
  }
}

export default ProductController;