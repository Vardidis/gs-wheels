const port = 4300;
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors());
const assets = path.join(__dirname, 'assets/images');
app.use('/images', express.static(assets));

app.get('/products', async(req, res) => {
    fs.readFile(path.join(__dirname, 'items.json'), 'utf8', async(err, data) => {
        if(err){
            res.status(500).send('Error reading products file');
        }
        const products = JSON.parse(data).products;        

        res.json(products);
    });
});

app.listen(port, (error)=>{
    if(!error){
        console.log("server live: port " + port);
    };
});