import express from 'express';
import mongoose from 'mongoose';
import {storeProducts} from './DB_data.js'
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';

const app = express();

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

/*
app.get('/api/products', (req, res) => {
    console.log("api/products");
    res.send(storeProducts);
});

app.get('/api/product/:id', (req, res) => {
    console.log(req.params);
    const product = storeProducts.find((x) => x.id === parseInt(req.params.id));
    console.log("api/products/id");
    console.log(product);
    if(product) {
        console.log("is prod");
       res.send(product);
    } else {
        console.log(" no prod");
        res.status(404).send({message: "Product not found"});
    }




    //res.send(storeProducts);
});*/

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
    res.send('serv is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });

const port = process.env.PORT || 5500;

app.listen(port, () => {
    console.log("serv is running on.." + port);
});