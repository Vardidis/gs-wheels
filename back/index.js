const port = 4300;
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');

const mongoose = require('./lib/mongoose');
const productUpdate = require('./api/updateProduct');
const productDelete = require('./api/deleteProduct');
const productsFetch = require('./api/fetchProducts');
const messageSubmit = require('./api/submitMessage');
const messagesFetch = require('./api/fetchMessages');
const messageRead = require('./api/readMessage');

const app = express();
app.use(express.json());

mongoose()

app.use(cors());

const assets = path.join(__dirname, 'public/images');
const items = path.join(__dirname, 'items.json');

app.use('/images', express.static(assets));

const storage = multer.diskStorage({
    destination: assets,
    filename:(req, file, cb)=>{
        return cb(null, `${file.originalname}`);
    }
});
const upload = multer({storage:storage});


app.get('/uploads', (req, res) => {
    fs.readdir(assets, (err, files) => {
        if(err){
            res.status(500);
        }
        let allFiles = []
        files.forEach(file => {
            allFiles.push(file);
        });

        res.json({"files": allFiles});
    });
})

app.post('/upload-image', upload.single('image'), (req,res)=>{
    res.json({
        success: 1,
    });
});

app.delete('/delete-image', (req, res) => {
    
    const index = req.query.index;
    
    fs.unlink(path.join(assets, index), (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting file' });
        }

        res.status(200).json({ message: 'File deleted successfully' });
    });
})

app.post('/delete-item', (req, res) => {
    const productId = req.body.id;

    fs.readFile(items, 'utf8', async(err, data) => {
        if(err){
            res.status(500).send('Error reading products file');
        }

        const products = JSON.parse(data).products;        

        const updatedProducts = products.filter(element => element.id !== productId);
        fs.writeFile(path.join(__dirname, 'items.json'), JSON.stringify({"products": updatedProducts}, null, 2), (response, writeErr) => {
            if(writeErr){
                res.status(500);
                console.error('Error writing file:', writeErr);  
                return;              
            }
            res.status(200).json({
                message: 'Data deleted successfully',        
            });
        });
    });
});

app.use('/api/update-item', productUpdate);
app.use('/api/delete-item', productDelete);
app.use('/api/all-products', productsFetch);
app.use('/api/submit-message', messageSubmit);
app.use('/api/all-messages', messagesFetch);
app.use('/api/read-message', messageRead);

app.post('/update-item', (req, res) => {
    const productId = Number(req.body.id);
    const product = req.body.product;

    fs.readFile(items, 'utf8', async(err, data) => {
        if(err){
            res.status(500).send('Error reading products file');
        }

        const products = JSON.parse(data).products        
        console.log(product)
        if(product){
            const cleanItem = {
                id: productId,
                tag: product.category,
                title: product.title,
                subtitle: "also test",
                thumbnail: product.mainImg,
                sub: product.subs,
                desc: product.desc,
                chars: product.dets
            }
            console.log(cleanItem)
            let updatedProducts = products.filter(element => element.id !== productId);
            
            updatedProducts.push(cleanItem);
            

            fs.writeFile(items, JSON.stringify({"products": updatedProducts}, null, 2), (response, writeErr) => {
                if(writeErr){
                    res.status(500);
                    console.error('Error writing file:', writeErr);  
                    return;              
                }
                res.status(200).json({
                    message: 'Data updated successfully',        
                });
            });
        }
    });
});

app.listen(port, (error)=>{
    if(!error){
        console.log("server live: port " + port);
    };
});