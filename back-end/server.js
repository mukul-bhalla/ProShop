const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
dotenv.config();

const app = express();


// const notFound = require('./middleware/errorMiddleware')
// const errorHandler = require('./middleware/errorMiddleware')

const productRoutes = require('./Routes/productRoutes');
const userRoutes = require('./Routes/userRoutes');

const port = process.env.PORT || 5000;
// const Cors = require('cors');
const connectDB = require('./config/db')
connectDB();

// app.use(Cors()); 
// No Need for cors i using proxy in vite.config.js


// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie Parser Middleware
app.use(cookieParser())

// Routes



app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
    res.send('API is running');
})
// app.use(notFound);
// app.use(errorHandler);

app.listen(port, () => {
    console.log(`Listening at PORT ${port}`)
})