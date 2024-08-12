const express = require('express');
const cors = require('cors');
const router = express.Router();
const { getProducts, submitMessage } = require('../controllers/publicController');

app.use(cors());

router.get('/products', ensureAuthenticated, async(req, res) => {
    getProducts();
});

app.post('/submit-message', (req, res) => {
    const {name, email, tel, text} = req.body;
    submitMessage(name, email, tel, text);
});