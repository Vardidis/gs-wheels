const port = 4300;
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const assets = path.join(__dirname, 'assets');
app.use('/media', express.static(assets));

app.get('/products', async(req, res) => {
    const files = await fs.promises.readdir(assets);
    const images = files.filter(file => file.endsWith('.jpg'));
    const imagePromises = images.map(async image => {
        const data = await fs.promises.readFile(path.join(assets, image));
        return {
            name: image,
            data: "data:image/jpeg;base64," + data.toString('base64')
        }
    });
    const resolvedImages = await Promise.all(imagePromises);
    res.json(resolvedImages);
});

app.listen(port, (error)=>{
    if(!error){
        console.log("server live: port " + port);
    };
});