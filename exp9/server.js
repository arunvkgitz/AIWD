const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3001;

// MongoDB Connection (Placeholder URI)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/exp9_db';

mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String
});

const Product = mongoose.model('Product', productSchema);

app.get('/', (req, res) => {
    res.send('<h1>Experiment 9: Node.js & MongoDB</h1><p>Ensure MongoDB is running locally or provide MONGODB_URI.</p>');
});

app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
