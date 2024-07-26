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
        const data = fs.readFile(path.join(__dirname, 'items.json'), 'utf8');
        const products = JSON.parse(data).products;

        products.map(async product => {
            if(product.thumbnail){
                const response = await axios.get(`${assets}/${product.thumbnail}`, { responseType: 'arraybuffer' });
                const base64Image = Buffer.from(response.data, 'binary').toString('base64');
                product.thumbnail = `data:image/jpeg;base64,${base64Image}`;
            }
        });

        console.log(products)

        res.status(500).send('Error reading products file');

    
    





    // products.map(async product => {
    //     await fs.promises.readFile(path.join(assets, product.thumbnail)).then(data =>{
    //         product.thumbnail = "data:image/jpeg;base64," + data.toString('base64');                
    //     });
    // })


    // const files = await fs.promises.readdir(assets);
    // const images = files.filter(file => file.endsWith('.jpg'));
    // const imagePromises = images.map(async image => {
    //     const data = await fs.promises.readFile(path.join(assets, image));
    //     return {
    //         name: image,
    //         data: "data:image/jpeg;base64," + data.toString('base64')
    //     }
    // });
    // const resolvedImages = await Promise.all(imagePromises);
    // res.json(resolvedImages);
});

app.get('/product', async(req, res) => {
// PROVIDE ALL THE PHOTOS OF THE CURRENT PRODUCT AS WELL AS A DESCRIPTION.
// INFO ALREADY GIVEN WILL BE PASSED BY THE FRONT END.
// SO BASICALLY /product WILL DO WHAT /products IS CURRENTLY DOING.
});

app.listen(port, (error)=>{
    if(!error){
        console.log("server live: port " + port);
    };
});