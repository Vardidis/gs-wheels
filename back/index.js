const port = 4300;
const express = require('express');
const cors = require('cors');

const {fetchAllImages} = require('./api/fetchImages');
const mongoose = require('./lib/mongoose');
const productUpdate = require('./api/updateProduct');
const productDelete = require('./api/deleteProduct');
const productsFetch = require('./api/fetchProducts');
const messageSubmit = require('./api/submitMessage');
const messagesFetch = require('./api/fetchMessages');
const messageRead = require('./api/readMessage');


const {getImage} = require('./api/fetchOneImage');

const app = express();
app.use(express.json());

mongoose()

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['*']
};

app.use(cors(corsOptions));

// const storage = multer.diskStorage({
//     destination: assets,
//     filename:(req, file, cb)=>{
//         return cb(null, `${file.originalname}`);
//     }
// });
// const upload = multer({storage:storage});


// app.post('/upload-image', upload.single('image'), uploadImage, async(req, res) => {
//     const file = req.files
//     uploadImage(req);
// });

app.get('/uploads', async(req, res) => {    
    const imagePaths = await fetchAllImages();
    // const imagePath = await getImage('R7.jpg');
    res.status(200).send(imagePaths);
});

// app.get('/uploads', (req, res) => {
//     fs.readdir(assets, (err, files) => {
//         if(err){
//             res.status(500);
//         }
//         let allFiles = []
//         files.forEach(file => {
//             allFiles.push(file);
//         });

//         res.json({"files": allFiles});
//     });
// })

// app.post('/upload-image', upload.single('image'), (req,res)=>{
//     res.json({
//         success: 1,
//     });
// });

// app.delete('/delete-image', (req, res) => {
    
//     const index = req.query.index;

//     fs.unlink(path.join(assets, index), (err) => {
//         if (err) {
//             return res.status(500).json({ message: 'Error deleting file' });
//         }

//         res.status(200).json({ message: 'File deleted successfully' });
//     });
// })

app.use('/api/update-item', productUpdate);
app.use('/api/delete-item', productDelete);
app.use('/api/all-products', productsFetch);
app.use('/api/submit-message', messageSubmit);
app.use('/api/all-messages', messagesFetch);
app.use('/api/read-message', messageRead);

app.listen(port, (error)=>{
    if(!error){
        console.log("server live: port " + port);
    };
});