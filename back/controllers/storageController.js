const multer = require('multer');

const storage = multer.diskStorage({
    destination: assets,
    filename:(req, file, cb)=>{
        return cb(null, `${file.originalname}`);
    }
});
const upload = multer({storage:storage});

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