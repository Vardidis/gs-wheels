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

            const resThumbImage = products.map(async product => {
                // Resolve thumbnail image
                const imageData = await fs.promises.readFile(path.join(assets, product.thumbnail));
                product.thumbnail = "data:image/jpeg;base64," + imageData.toString('base64');
            });

            await Promise.all(resThumbImage);

            res.json(products);
        });
});

app.get('/product', async(req, res) => {
// PROVIDE ALL THE PHOTOS OF THE CURRENT PRODUCT AS WELL AS A DESCRIPTION.
// INFO ALREADY GIVEN WILL BE PASSED BY THE FRONT END.
// SO BASICALLY /product WILL DO WHAT /products IS CURRENTLY DOING.
// Resolve sub images
                
const subs = product.sub.map(async(image, index) => {
    let subImgs = [];
    const subImage = await fs.promises.readFile(path.join(assets, image));
        subImgs.add("data:image/jpeg;base64," + subImage.toString('base64'));
});
});

app.listen(port, (error)=>{
    if(!error){
        console.log("server live: port " + port);
    };
});