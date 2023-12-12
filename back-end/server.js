const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const products = require('./data/products')
const port = process.env.PORT || 5000;
const Cors = require('cors');
const connectDB = require('./config/db')
connectDB();
app.use(Cors());
app.get('/', (req, res) => {
    res.send('API is running');
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const p = products.find((p) => p._id === id);
    res.json(p);
})
app.listen(port, () => {
    console.log(`Listening at PORT ${port}`)
})