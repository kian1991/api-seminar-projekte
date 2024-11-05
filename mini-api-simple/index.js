import express from 'express';
import bodyParser from 'body-parser';
import { productRouter } from './routes/product-routes.js';

const app = express();
const PORT = 3000;

// Body Parser Middleware
app.use(bodyParser.json());
app.use('/products', productRouter);

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
