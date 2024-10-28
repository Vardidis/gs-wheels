const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

const uploadFileMid = (req, res, next) => {
    return upload.single('image')(req, res, next);
}

module.exports = uploadFileMid;