"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, domaine, cuvee, millesime, type, vignoble, appellation, classification, price, stock) {
        this.id = id;
        this.domaine = domaine;
        this.cuvee = cuvee;
        this.millesime = millesime;
        this.type = type;
        this.vignoble = vignoble;
        this.appellation = appellation;
        this.classification = classification;
        this.price = price;
        this.stock = stock;
    }
    static fromJSON(json) {
        return new Product(json.id, json.domaine, json.cuvee, json.millesime, json.type, json.vignoble, json.appellation, json.classification, json.price, json.stock);
    }
}
exports.Product = Product;
