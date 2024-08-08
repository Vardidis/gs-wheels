const port = 4300;
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(cors());
const assets = path.join(__dirname, 'assets/images');
const messages = path.join(__dirname, 'messages.json');
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

app.get('/messages', (req, res) => {
    fs.readFile(messages, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }

        let msgData = JSON.parse(data);
        res.json(msgData);
    });
})

const getDate = () => {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

app.post('/submit-message', (req, res) => {
    const {name, email, tel, text} = req.body;
    fs.readFile(messages, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }

        let msgData = JSON.parse(data);

        const date = getDate();

        msgData.messages.push({
            "name": name,
            "tel": tel,
            "email": email,
            "text": text,
            "date": date,
            "read": false
        });

        fs.writeFile(messages, JSON.stringify(msgData, null, 2), (response, writeErr) => {
            if(writeErr){
                res.status(500);
                console.error('Error writing file:', writeErr);  
                return;              
            }
            res.status(200).json({
                message: 'Data received successfully',
                receivedData: msgData,
              });
              console.log('File successfully updated');
        })
    });
})

app.listen(port, (error)=>{
    if(!error){
        console.log("server live: port " + port);
    };
});