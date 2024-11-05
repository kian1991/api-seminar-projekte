// We are in route /products

import express from 'express';
import { getProductHandler } from '../controllers/product-controller.js';

export const productRouter = express.Router();

productRouter.get('/', getProductHandler);
