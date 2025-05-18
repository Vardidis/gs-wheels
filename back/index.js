const express = require('express');
const cors = require('cors');
const multer = require("multer");

const productUpdate = require('./api/updateProduct');
const productDelete = require('./api/deleteProduct');
const productsFetch = require('./api/fetchProducts');
const messageSubmit = require('./api/submitMessage');
const messagesFetch = require('./api/fetchMessages');
const messageRead = require('./api/readMessage');
const {fetchAllImages} = require('./api/fetchImages');
const fetchAllTexts = require('./api/allTexts');
const uploadImage = require('./controllers/uploadFile');
const {deleteImage} = require('./controllers/deleteFile');
const textUpdate = require('./controllers/editText');
const { uploadStory } = require('./controllers/uploadStory');

const app = express();
app.use(express.json());

const fileFilter = (req, file, cb) => {   
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
};

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter
});

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['*']
};

app.use(cors(corsOptions));

app.get('/uploads', async(req, res) => {    
    const imagePaths = await fetchAllImages();

    res.status(200).send(imagePaths);
});

app.use('/api/update-item', productUpdate);
app.use('/api/delete-item', productDelete);
app.use('/api/all-products', productsFetch);
app.use('/api/submit-message', messageSubmit);
app.use('/api/all-messages', messagesFetch);
app.use('/api/read-message', messageRead);
app.use('/api/all-texts', fetchAllTexts);

app.post('/upload-image', upload.single('image'), async(req, res) => {
    await uploadImage(req, res);
});

app.delete('/delete-image', async(req, res) => {
    const filename = req.query.filename;
    await deleteImage(filename);
});

app.post('/submit-texts', async(req, res) => {
    const texts = req.body.texts;    
    const resp = await textUpdate(texts);
    
    return res.json({success: resp});

})

app.post('/upload-story', async(req, res) => {
    const {form} = req.body;
    const response = await uploadStory(form)
    if(response.success){
        return res.status(200).json({success: true});
    }
})

const port = 4300;
app.listen(port, (error)=>{
    if(!error){
        console.log("server live: port " + port);
    };
});


module.exports = app;