const port = 4300;
const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(express.json());

// const allowedOrigins = ['https://gs-wheels-vardidis-projects.vercel.app', '*'];
// const originPattern = /^https:\/\/gs-wheels-server-[a-z0-9]+-vardidis-projects\.vercel\.app$/;

// const corsOptions = {
//     origin: function(origin, callback) {
//         if(allowedOrigins.indexOf(origin) !== -1 || originPattern.test(origin)){
//             callback(null, true);
//         }else{
//             callback(new Error('Access is not allowed by CORS'));
//         }
//     },
//     methods: ['POST', 'GET'],
//     credentials: true
// }

// app.use(cors(corsOptions));

const assets = path.join(__dirname, 'public/images');
const messages = path.join(__dirname, 'messages.json');
app.use('/images', express.static(assets));

const storage = multer.diskStorage({
    destination: assets,
    filename:(req, file, cb)=>{
        return cb(null, `${file.originalname}`);
    }
});
const upload = multer({storage:storage});

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
});

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

const getDate = () => {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

app.post('/upload-image', upload.single('image'), (req,res)=>{
    res.json({
        success: 1,
    });
});

app.post('/delete-image', (req, res) => {
    const index = req.body.index;
    
    fs.unlink(path.join(assets, index), (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting file' });
        }

        res.status(200).json({ message: 'File deleted successfully' });
    });
})

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
});

app.post('/delete-message', (req, res) => {
    const productId = req.body.id;

    fs.readFile(path.join(__dirname, 'items.json'), 'utf8', async(err, data) => {
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

app.listen(port, (error)=>{
    if(!error){
        console.log("server live: port " + port);
    };
});