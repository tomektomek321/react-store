import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { ecomProducts, storeProducts } from '../DB_data.js'
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

productRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await Product.remove({});
    console.log(1);
    const createdProducts = await Product.insertMany(ecomProducts.products);
    console.log(ecomProducts);
    console.log(createdProducts);
    res.send({ createdProducts });
  })
);

productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = storeProducts.filter(prod => prod.id == req.params.id);
    console.log(product[0]);
    //const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product[0]);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

export default productRouter;