const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const products = require('./data/products')
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('API is running');
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
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