const express = require('express');
const app = express();
const products = require('./data/products')
const port = 5000;
app.get('/', (req, res) => {
    res.send('API is running');
})

app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const p = products.map((p) => {

        if (p._id === id) {
            return p;
        }
    })
    res.json(p);
})
app.listen(port, () => {
    console.log(`Listening at PORT ${port}`)
})