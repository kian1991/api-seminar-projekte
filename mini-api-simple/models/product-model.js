let products = [
  { id: 1, name: 'Nike Airforce 1', description: 'Tolles paar Schuhe', price: 89.99 },
  { id: 2, name: 'Dell XPS 13 2024', description: 'Leistungsstarker Laptop', price: 1899.99 },
  { id: 3, name: 'Apple iPhone 13', description: 'Neuestes iPhone', price: 999.99 },
  { id: 4, name: 'Apple Watch Series 7', description: 'Smartwatch von Apple', price: 399.99 },
  { id: 5, name: 'Sony WH-1000XM4', description: 'Noise Cancelling Kopfhörer', price: 349.99 },
  { id: 6, name: 'Nintendo Switch', description: 'Spielekonsole von Nintendo', price: 299.99 },
  { id: 7, name: 'Sony A7 III', description: 'Spiegellose Vollformatkamera', price: 1799.99 },
  { id: 8, name: 'Logitech MX Master 3', description: 'Kabellose Maus', price: 99.99 },
  { id: 9, name: 'Bose QuietComfort 45', description: 'Noise Cancelling Kopfhörer', price: 329.99 },
  { id: 10, name: 'Samsung Galaxy S21', description: 'Smartphone von Samsung', price: 799.99 },
];

export class Product {
  static findAll(sortBy) {
    // Sort by function here
    return products;
  }

  /**
   * Function to update a product by its ID.
   *
   * @param {number} id the product ID of the product to be updated
   * @param {*} product full product with properties: name, description, price
   * @returns null if no product found | updated Product on success
   */
  static updateProduct(id, product) {
    const productToUpdate = products.find((pr) => (pr.id = id));
    if (!productToUpdate) return null;
    // ...
  }

  static createProduct(product) {
    // ...
  }

  static deleteProduct(id) {
    // ...
  }
}
