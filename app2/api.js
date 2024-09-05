const express = require('express');
const app = express();
const port = 8080;

const products = [
  { productId: 1, title: 'Title 01' },
  { productId: 2, title: 'Title 02' }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`App2 listening at http://localhost:${port}`);
});