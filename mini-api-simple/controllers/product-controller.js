import { Product } from '../models/product-model.js';

export const getProductHandler = (req, res) => {
  // get products from database
  const products = Product.findAll();
  res.json({ data: products });
};

export const updateProductHandler = (req, res) => {
  const updatedProduct = Product.updateProduct(req.body.data);
};
