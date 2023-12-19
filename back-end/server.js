const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const productRoutes = require('./Routes/productRoutes');

const port = process.env.PORT || 5000;
const Cors = require('cors');
const connectDB = require('./config/db')
connectDB();
app.use(Cors());
app.get('/', (req, res) => {
    res.send('API is running');
})

app.use('/api/products', productRoutes);

app.listen(port, () => {
    console.log(`Listening at PORT ${port}`)
})